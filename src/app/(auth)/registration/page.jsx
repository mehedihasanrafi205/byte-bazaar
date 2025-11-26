"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

export default function RegisterPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleRegister = async (e) => {
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
        text: "Were working on email/password Registration. In the meantime, you can sign in using Google.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // router.push("/");
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
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              required
              className="input input-bordered w-full"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="label">Email</label>
            <input
              type="email"
              required
              className="input input-bordered w-full"
              placeholder="name@email.com"
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
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
            {loading ? "Registering..." : "Register"}
          </button>

          <div class="divider">OR</div>

          <button
            onClick={handleGoogle}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>

          <p className="text-sm text-center mt-3">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
