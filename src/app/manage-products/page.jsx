"use client";

import ManageCard from "@/components/ManageCard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEdit, FiTrash2, FiPlus, FiChevronDown } from "react-icons/fi";

const sampleProducts = [
  {
    _id: "6925d76448b3870613ecec9e",
    title: "PopSocket Grip",
    price: 1800,
    category: "Phone accessories",
    images: [
      "https://images.unsplash.com/photo-1639880016395-51c3d5c1d6b4?w=800&h=600&fit=crop",
    ],
    stock: 25,
    created_at: "2025-11-25T19:00:00Z",
  },
  {
    _id: "6925d76448b3870613ecec9e",
    title: "Wireless Earbuds",
    price: 3500,
    category: "Audio",
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155223f3c9?w=800&h=600&fit=crop",
    ],
    stock: 12,
    created_at: "2025-11-10T18:00:00Z",
  },
];

export default function ManageProducts() {
  const [products, setProducts] = useState(sampleProducts);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("Newest");

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p._id !== id));
  };

  const handleSort = (type) => {
    setSortType(type);
    setSortOpen(false);

    const sorted = [...products].sort((a, b) => {
      if (type === "Price: Low to High") return a.price - b.price;
      if (type === "Price: High to Low") return b.price - a.price;
      if (type === "Newest")
        return new Date(b.created_at) - new Date(a.created_at);
    });

    setProducts(sorted);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 mt-30 mb-15">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <Link href={"/add-product"} className="btn btn-primary gap-2">
          <FiPlus /> Add Product
        </Link>
      </div>

      {/* Filter & Sorting */}
      <div className="flex items-center justify-between bg-base-200 p-4 rounded-xl">
        <div className="font-semibold text-sm">
          Total Products: {products.length}
        </div>

        <div className="relative">
          <button
            className="btn btn-sm bg-base-100 border flex items-center gap-2"
            onClick={() => setSortOpen(!sortOpen)}
          >
            {sortType}
            <FiChevronDown />
          </button>

          {sortOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-base-100 shadow-xl rounded-xl border">
              {["Newest", "Price: Low to High", "Price: High to Low"].map(
                (s) => (
                  <div
                    key={s}
                    onClick={() => handleSort(s)}
                    className="px-4 py-2 hover:bg-base-200 cursor-pointer text-sm"
                  >
                    {s}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ManageCard
            key={product._id}
            product={product}
            handleDelete={handleDelete}
          ></ManageCard>
        ))}
      </div>
    </div>
  );
}
