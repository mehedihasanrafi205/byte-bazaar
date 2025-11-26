import ProductCard from "@/components/ProductCard";
import React from "react";

const Products = async () => {
  const res = await fetch(
    "https://byte-bazaar-server-drab.vercel.app/products"
  );
  const products = await res.json();

  return (
    <div className="container mx-auto px-6 xl:px-0 mt-30 mb-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
