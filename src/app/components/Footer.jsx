// components/Footer.jsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900/95 text-gray-300 py-12 mt-16 backdrop-blur-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="text-3xl font-bold text-white mb-3 flex gap-2 items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h2>
              Byte<span className="text-primary">Bazaar</span>
            </h2>
          </Link>
          <p className="text-gray-400 leading-6">
            Your trusted marketplace for modern gadgets, accessories, and tech essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "Products", "About", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className="hover:text-primary transition transform hover:scale-105"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-3">
            {["Help Center", "Refund Policy", "Privacy Policy", "Terms & Conditions"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-primary transition transform hover:scale-105"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-xl">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-primary transition transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ByteBazaar — All Rights Reserved.
      </div>
    </footer>
  );
}
