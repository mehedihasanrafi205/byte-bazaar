"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

const ManageCard = ({ product, handleDelete }) => {
  const router = useRouter();

  const handleViewDetails = (_id) => {
    router.push(`/products/${_id}`);
  };

  return (
    <div className="card bg-base-100 border rounded-xl shadow-sm hover:shadow-lg transition-all">
      <figure className="relative h-40 w-full overflow-hidden rounded-top-xl">
        <Image
          src={product.images?.[0] || "/placeholder.jpg"}
          alt={product.title}
          fill
          className="object-cover"
        />
      </figure>

      <div className="p-4 space-y-2">
        <h2 className="font-bold text-lg">{product.title}</h2>
        <p className="text-sm text-neutral/60">{product.category}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-primary text-xl">
            ৳ {product.price}
          </span>
          <span
            className={`text-sm ${
              product.stock > 10
                ? "text-green-600"
                : product.stock > 0
                ? "text-orange-600"
                : "text-red-600"
            }`}
          >
            {product.stock > 10
              ? "In Stock"
              : product.stock > 0
              ? "Low Stock"
              : "Out of Stock"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t">
          <button
            onClick={() => handleViewDetails(product._id)}
            className="btn btn-sm btn-outline gap-2"
          >
            <FiEye /> Details
          </button>

          <button className="btn btn-sm btn-ghost gap-2">
            <FiEdit /> Edit
          </button>

          <button
            onClick={() => handleDelete(product._id)}
            className="btn btn-sm btn-error text-error-content gap-2"
          >
            <FiTrash2 /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCard;
