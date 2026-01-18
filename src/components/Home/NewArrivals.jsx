import React from "react";
import ProductCard from "../ProductCard";

const NewArrivals = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/latest-products`
  );
  const products = await res.json();

  return (
    <div className="container mx-auto mt-30">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl md:text-5xl my-4 text-gray-800">
          New Arrivals
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
          Explore our wide range of product categories and find the perfect
          gadget for your lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
