"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Swal from "sweetalert2";

export default function Profile() {
  const { data: session, update } = useSession(); 
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to update profile");

      // Update the NextAuth session
      await update({
        name: data.user.name,
        email: data.user.email,
      });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully!",
      });

      setEditing(false);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!session) return <p>Please login to view your profile</p>;

  return (
    <div className="max-w-md mx-auto mt-30 mb-18 p-6  rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="label">Name</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          ) : (
            <p className="text-lg">{session.user.name}</p>
          )}
        </div>

        <div>
          <label className="label">Email</label>
          <p className="text-lg">{session.user.email}</p>
        </div>

        <div className="flex gap-2 mt-4">
          {editing ? (
            <>
              <button
                onClick={handleUpdate}
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Updating..." : "Save"}
              </button>
              <button onClick={handleEditToggle} className="btn btn-outline">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEditToggle} className="btn btn-primary">
              Edit Profile
            </button>
          )}
        </div>

        <button onClick={() => signOut()} className="btn btn-error mt-4 w-full">
          Logout
        </button>
      </div>
    </div>
  );
}
