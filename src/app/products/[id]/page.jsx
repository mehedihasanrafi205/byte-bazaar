import React from "react";
import ProductDetail from "@/components/ProductDetail";
// import ProtectedRoute from "@/components/ProtectedRoute";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  // console.log("Product ID:", id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
  );
  const product = await res.json();

  return (
    // <ProtectedRoute>
      <div className="container mx-auto  px-6 xl:px-0 mt-30">
        <ProductDetail product={product} />
      </div>
    // </ProtectedRoute>
  );
}
