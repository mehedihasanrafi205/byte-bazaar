"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);

  const links = (
    <>
      <li>
        <Link
          href="/"
          className="relative group px-2 py-1 rounded-md transition-all duration-300 hover:text-primary"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
      {session && (
        <>
          {" "}
          <li>
            <Link
              href="/products"
              className="relative group px-2 py-1 rounded-md transition-all duration-300 hover:text-primary"
            >
              Products
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/add-product"
              className="relative group px-2 py-1 rounded-md transition-all duration-300 hover:text-primary"
            >
              Add Product
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/manage-products"
              className="relative group px-2 py-1 rounded-md transition-all duration-300 hover:text-primary"
            >
              Manage Products
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </>
      )}
      <li>
        <Link
          href="/about"
          className="relative group px-2 py-1 rounded-md transition-all duration-300 hover:text-primary"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/80 shadow-lg">
      <div className="navbar text-white container mx-auto px-4 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800/90 rounded-box w-52 backdrop-blur-sm"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold hidden md:block">
              Byte<span className="text-primary">Bazar</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>

        <div className="navbar-end">
          {session ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar ring-2 ring-primary ring-offset-2 hover:ring-offset-base-200 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-10 h-10 text-gray-400" />
                  )}
                </div>
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow-lg bg-gray-900/90 rounded-xl  mt-2 border border-gray-700 flex flex-col gap-2"
              >
                {/* User Info */}
                <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700 flex flex-col gap-1">
                  <span className="font-semibold text-gray-800 dark:text-white truncate">
                    {session.user?.name || "User"}
                  </span>
                  <span className="text-gray-500 dark:text-gray-300 text-sm truncate">
                    {session.user?.email || "No email"}
                  </span>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col">
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaUserCircle /> Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-red-500 hover:text-white w-full text-left transition-colors"
                    >
                      <FaUserCircle /> Logout
                    </button>
                  </li>
                </ul>
              </ul>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-primary hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
