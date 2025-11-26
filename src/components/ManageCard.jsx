"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";

export default function ManageCard({ product, handleDelete }) {
  const router = useRouter();

  const {
    _id,
    title = "No Title",
    price = 0,
    category = "Uncategorized",
    images = [],
  } = product || {};

  const imageUrl =
    images.length > 0 && images[0]?.startsWith("http")
      ? images[0]
      : "/logo.png"; 

  const handleViewDetails = () => {
    router.push(`/products/${_id}`);
  };

  return (
    <div className="border rounded-xl p-4 flex flex-col shadow-md bg-white hover:shadow-lg transition-shadow">
      <div className="w-full h-48 relative mb-4">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>

      <h2 className="font-bold text-lg truncate">{title}</h2>
      <p className="text-gray-500 mt-1">
        ৳{price} | {category}
      </p>

      <div className="mt-4 flex justify-between">
        <button
          onClick={handleViewDetails}
          className="btn btn-sm btn-primary flex-1 mr-2"
        >
          View Details
        </button>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-error flex-1"
        >
          <FiTrash2 /> Delete
        </button>
      </div>
    </div>
  );
}
