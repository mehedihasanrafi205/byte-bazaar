"use client";

import { useState } from "react";
import Link from "next/link";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Fake login delay
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: "Login successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      router.push("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              required
              className="input input-bordered w-full"
              placeholder="your@email.com"
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
            {loading ? "Logging in..." : "Login"}
          </button>

          <div class="divider">OR</div>

          <button className="btn bg-white text-black border-[#e5e5e5] w-full">
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
            Login with Google
          </button>

          <p className="text-sm text-center mt-3">
            New here?{" "}
            <Link href="/registration" className="text-primary font-semibold">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
