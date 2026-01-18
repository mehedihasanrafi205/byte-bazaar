"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    category: "",
    images: [""],
    rating: "",
    specifications: {
      BatteryLife: "",
      Connectivity: "",
      Weight: "",
      Color: "",
      Warranty: "",
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSpecChange = (e) => {
    setFormData({
      ...formData,
      specifications: {
        ...formData.specifications,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const addImageField = () => {
    setFormData({ ...formData, images: [...formData.images, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?.email) {
      Swal.fire({
        icon: "error",
        title: "Login required",
        text: "Please login to add a product.",
      });
      return;
    }

    const productData = { ...formData, email: session.user.email };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        }
      );
      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        setFormData({
          title: "",
          shortDesc: "",
          fullDesc: "",
          price: "",
          category: "",
          images: [""],
          rating: "",
          specifications: {
            BatteryLife: "",
            Connectivity: "",
            Weight: "",
            Color: "",
            Warranty: "",
          },
        });
        router.push("/manage-products");
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to add product",
          text: data?.error || "Unknown error",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server error",
        text: "Something went wrong.",
      });
    }
  };

  return (
    <ProtectedRoute>
      <section className="px-6 xl:px-0">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-30 mb-15">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
                required
              />
              <textarea
                name="shortDesc"
                placeholder="Short Description"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
                required
              />
              <textarea
                name="fullDesc"
                placeholder="Full Description"
                className="w-full border border-gray-300 p-3 rounded-lg h-32 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="rating"
                  step="0.1"
                  placeholder="Rating (e.g. 4.7)"
                  className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                name="category"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Adapter">Adapter</option>
                <option value="Headset">Headset</option>
                <option value="PowerBank">PowerBank</option>
                <option value="Smartwatch">Smartwatch</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="PhoneAccessories">Phone Accessories</option>
              </select>
            </div>

            {/* Images */}
            <div className="space-y-2">
              <label className="font-medium text-gray-700">
                Product Images
              </label>
              {formData.images.map((img, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Image URL ${i + 1}`}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={img}
                  onChange={(e) => handleImageChange(i, e.target.value)}
                  required
                />
              ))}
              <button
                type="button"
                onClick={addImageField}
                className="mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                + Add More Images
              </button>
            </div>

            {/* Specifications */}
            <div className="space-y-2">
              <label className="font-medium text-gray-700">
                Specifications
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="BatteryLife"
                  placeholder="Battery Life"
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  onChange={handleSpecChange}
                  required
                />
                <input
                  type="text"
                  name="Connectivity"
                  placeholder="Connectivity"
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  onChange={handleSpecChange}
                  required
                />
                <input
                  type="text"
                  name="Weight"
                  placeholder="Weight"
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  onChange={handleSpecChange}
                  required
                />
                <input
                  type="text"
                  name="Color"
                  placeholder="Color"
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  onChange={handleSpecChange}
                  required
                />
                <input
                  type="text"
                  name="Warranty"
                  placeholder="Warranty"
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  onChange={handleSpecChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all"
            >
              Submit Product
            </button>
          </form>
        </div>
      </section>
    </ProtectedRoute>
  );
}
