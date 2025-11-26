"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";

export default function ProductDetailPage({ product }) {
  const router = useRouter();


  const images =
    Array.isArray(product?.images) &&
    product.images.filter(
      (img) => typeof img === "string" && img.startsWith("http")
    );

  const [selectedImage, setSelectedImage] = useState(
    images?.[0] || "/logo.png"
  );

  const [quantity, setQuantity] = useState(1);

  const rating = Number(product?.rating) || 0;
  const price = Number(product?.price) || 0;

  return (
    <div className=" py-12 ">
 
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-6 text-sm font-medium text-primary hover:underline"
      >
        <FiArrowLeft /> Back
      </button>

      <div className="grid md:grid-cols-2 gap-12">
   
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={selectedImage}
              alt={product?.title || "Product"}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            {product?.category && (
              <span className="absolute top-4 left-4 badge badge-lg bg-primary/90 text-primary-content backdrop-blur-sm">
                {product.category}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            {(images?.length ? images : ["/logo.png"]).map((img, idx) => (
              <div
                key={idx}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer transition-transform hover:scale-105 ${
                  selectedImage === img
                    ? "border-primary"
                    : "border-base-300"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-neutral">
            {product?.title}
          </h1>

          <div className="flex items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400"
                    : "text-base-300"
                }`}
              />
            ))}
            <span className="text-sm font-medium text-neutral/70">
              {rating.toFixed(1)}
            </span>
          </div>

          <p className="text-neutral/70 text-lg">
            {product?.shortDesc}
          </p>

          <span className="text-3xl font-bold text-se">
            ৳ {price.toLocaleString()}
          </span>

          <div className="flex items-center gap-3">
            <span className="font-medium text-neutral/80">
              Quantity:
            </span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number(e.target.value)))
              }
              className="w-20 input input-bordered input-sm text-center"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button className="btn btn-primary btn-lg gap-2 flex-1">
              <BsCart3 /> Add to Cart
            </button>
            <button className="btn btn-secondary btn-lg flex-1">
              Buy Now
            </button>
          </div>

          {product?.specifications && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-neutral">
                Specifications:
              </h3>
              <ul className="flex flex-col gap-1 text-neutral/80">
                {Object.entries(product.specifications).map(([k, v]) => (
                  <li
                    key={k}
                    className="flex justify-between border-b py-1 border-base-200"
                  >
                    <span className="font-medium">{k}</span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-neutral/80 text-base">
        <h3 className="font-semibold text-lg mb-2">
          Product Details:
        </h3>
        <p>{product?.fullDesc}</p>
      </div>
    </div>
  );
}
