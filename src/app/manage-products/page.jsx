"use client";

import ManageCard from "@/components/ManageCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiPlus, FiChevronDown } from "react-icons/fi";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ManageProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("Newest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://byte-bazaar-server-drab.vercel.app/addedProducts?email=${session.user.email}`
        );
        const data = await res.json();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch products",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [session]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(
          `https://byte-bazaar-server-drab.vercel.app/products/${id}`,
          { method: "DELETE" }
        );
        const data = await res.json();

        if (data.deletedCount > 0) {
          setProducts(products.filter((p) => p._id !== id));
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Your product has been deleted.",
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete product",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Server error",
          text: "Something went wrong",
        });
      }
    }
  };

  const handleSort = (type) => {
    setSortType(type);
    setSortOpen(false);

    const sorted = [...products].sort((a, b) => {
      if (type === "Price: Low to High") return a.price - b.price;
      if (type === "Price: High to Low") return b.price - a.price;
      if (type === "Newest")
        return new Date(b.created_at) - new Date(a.created_at);
      return 0;
    });

    setProducts(sorted);
  };

  return (
    <ProtectedRoute>
      <div className="p-6 max-w-6xl mx-auto space-y-6 mt-12 mb-12">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manage Products</h1>
          <Link href="/add-product" className="btn btn-primary gap-2">
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
              <div className="absolute right-0 mt-2 w-48 bg-base-100 shadow-xl rounded-xl border z-50">
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
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ManageCard
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </ProtectedRoute>
  );
}
