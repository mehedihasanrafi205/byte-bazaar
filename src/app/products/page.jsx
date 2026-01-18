"use client";

import ProductCard from "@/components/ProductCard";
// import ProtectedRoute from "@/components/ProtectedRoute";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://byte-bazaar-server-drab.vercel.app"}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredProducts(filtered);
  }, [products, searchTerm, category]);

  const categories = [...new Set(products.map((p) => p.category))];

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("");
  };

  return (
    // <ProtectedRoute>
      <div className="container mx-auto px-6 xl:px-0 mt-30 mb-15">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between ">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full pr-10 shadow-md focus:ring-2 focus:ring-primary rounded-lg"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <AiOutlineClose className="w-5 h-5" />
              </button>
            )}
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full md:w-1/3 shadow-md focus:ring-2 focus:ring-primary rounded-lg"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {(searchTerm || category) && (
            <button
              onClick={clearFilters}
              className="btn btn-outline btn-error h-12 flex items-center gap-2"
            >
              <AiOutlineClose /> Clear Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="hover:scale-105 transition-transform duration-300"
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg">
              No products found.
            </p>
          )}
        </div>
      </div>
    // </ProtectedRoute>
  );
};

export default Products;
