"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  

  useEffect(() => {
    if (session) {
      router.push("/"); 
    }
  }, [session, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      Swal.fire({
        title: "Error!",
        text: res.error,
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Logged in successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/");
      });
    }
  };

  const handleGoogle = () => {
    setLoading(true);
    signIn("google", { callbackUrl: "/" });
  };

  // Loading overlay
  if (loading || status === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-base-200 bg-opacity-70 z-50">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 mb-4 animate-spin">
            <Image
              src="/logo.png"
              alt="Logo"
              className="rounded-full"
              width={96}
              height={96}
            />
          </div>
          <p className="text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered w-full"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered w-full"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            Login
          </button>

          <div className="divider">OR</div>
        </form>

        <button
          onClick={handleGoogle}
          className="btn bg-white text-black border-[#e5e5e5] w-full mt-2"
          disabled={loading}
        >
          <FcGoogle />
          Login with Google
        </button>

        <p className="text-sm text-center mt-3">
          New here?{" "}
          <Link href="/registration" className="text-primary font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
