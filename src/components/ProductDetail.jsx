"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

export default function ProductDetailPage({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("Added to cart:", product._id, "Quantity:", quantity);
  };

  const handleBuyNow = () => {
    console.log("Buy now:", product._id, "Quantity:", quantity);
  };

  return (
    <div className=" py-12 ">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            {product.category && (
              <span className="absolute top-4 left-4 badge badge-lg bg-primary/90 text-primary-content backdrop-blur-sm">
                {product.category}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer transition-transform hover:scale-105 ${
                  selectedImage === img ? "border-primary" : "border-base-300"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-neutral">{product.title}</h1>

          <div className="flex items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-base-300"
                }`}
              />
            ))}
            <span className="text-sm font-medium text-neutral/70">
              {Number(product.rating)?.toFixed(1)}
            </span>
          </div>

          <p className="text-neutral/70 text-lg">{product.shortDesc}</p>

          <span className="text-3xl font-bold text-se">
            ৳ {product.price.toLocaleString()}
          </span>

          <div className="flex items-center gap-3">
            <span className="font-medium text-neutral/80">Quantity:</span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 input input-bordered input-sm text-center"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform flex-1"
            >
              <BsCart3 className="w-5 h-5" /> Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="btn btn-secondary btn-lg flex-1 hover:scale-105 transition-transform"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-neutral">
              Specifications:
            </h3>
            <ul className="flex flex-col gap-1 text-neutral/80">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li
                  key={key}
                  className="flex justify-between border-b py-1 border-base-200"
                >
                  <span className="font-medium">{key}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-neutral/80 text-base">
        <h3 className="font-semibold text-lg mb-2">Product Details:</h3>
        <p>{product.fullDesc}</p>
      </div>
    </div>
  );
}
