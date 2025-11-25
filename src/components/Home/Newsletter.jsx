import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiBell, BiGift } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";

export default function Newsletter() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
      {/* Decorative Background */}{" "}
      <div className="absolute inset-0 overflow-hidden">
        {" "}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />{" "}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />{" "}
      </div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
            <HiSparkles className="w-4 h-4" />
            Join 10,000+ Subscribers
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Never Miss a Deal!
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to special offers, new arrivals, and tech tips
            delivered straight to your inbox.
          </p>
        </div>

 

        {/* Static Form */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-2xl p-2 shadow-2xl">
            <div className="relative flex-1">
              <AiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent focus:outline-none text-gray-800 placeholder:text-gray-400"
              />
            </div>
            <button className="bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>

          {/* Privacy Text */}
          <p className="text-white/70 text-sm mt-4 text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
