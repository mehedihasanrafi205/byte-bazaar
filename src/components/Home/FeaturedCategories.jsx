import React from "react";
import {
  FaBatteryFull,
  FaCouch,
  FaHeadphonesAlt,
  FaMobileAlt,
  FaSwatchbook,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const categories = [
  {
    name: "Adapter Headset",
    icon: <FaHeadphonesAlt size={40} />,
    count: "120+ Products",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "PowerBank",
    icon: <FaBatteryFull size={40} />,
    count: "85+ Products",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Smartwatch",
    icon: <FaSwatchbook size={40} />,
    count: "95+ Products",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Lifestyle",
    icon: <FaCouch size={40} />,
    count: "200+ Products",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Phone Accessories",
    icon: <FaMobileAlt size={40} />,
    count: "150+ Products",
    color: "from-yellow-500 to-amber-500",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Featured Categories
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
              Explore our wide range of product categories and find the perfect
              gadgets for your lifestyle.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center justify-center h-full min-h-[180px]">
                {/* Icon Container */}
                <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <div
                    className={`bg-linear-to-br ${category.color} text-white rounded-2xl p-4 shadow-lg`}
                  >
                    {category.icon}
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-base md:text-lg font-bold text-neutral group-hover:text-white transition-colors duration-300 text-center mb-2">
                  {category.name}
                </h3>

                {/* Product Count */}
                <p className="text-sm text-neutral/60 group-hover:text-white/90 transition-colors duration-300">
                  {category.count}
                </p>

                {/* Arrow Icon (appears on hover) */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <HiArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
