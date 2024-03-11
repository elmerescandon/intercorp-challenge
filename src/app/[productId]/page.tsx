"use client";
import ProductDetail from "@/components/template/ProductDetail/ProductDetail";
import React from "react";

const page = ({params}: {params: {productId: string}}) => {
  const {productId} = params;
  return (
    <div>
      <ProductDetail productId={productId} />
    </div>
  );
};

export default page;
