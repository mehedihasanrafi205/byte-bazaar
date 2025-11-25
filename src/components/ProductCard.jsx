"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

export default function ProductCard({ product }) {
  const router = useRouter();

  const {
    _id,
    title = "Untitled Product",
    shortDesc = "",
    price = 0,
    category = "",
    images = [],
    rating = 4.5,
  } = product || {};

  const handleViewDetails = () => {
    router.push(`/products/${_id}`);
  };

  const mainImage =
    images.length > 0
      ? images[0]
      : "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <div
      onClick={handleViewDetails}
      className="card bg-base-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full group"
    >
      {/* Image */}
      <div className="relative w-full h-52 md:h-60 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        {category && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-content text-xs font-semibold backdrop-blur-sm shadow-sm">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 grow">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-neutral truncate">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral/60 line-clamp-2">
          {shortDesc || "No description available"}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? "text-yellow-400" : "text-base-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-neutral">
            {Number(rating)?.toFixed(1)}
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-300">
          <span className="text-2xl font-bold text-se">
            ৳ {price.toLocaleString()}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("Added to cart:", _id);
            }}
            className="btn btn-primary btn-sm flex items-center gap-2 px-3 py-2 hover:scale-105 transition-transform rounded-lg"
          >
            <BsCart3 className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
