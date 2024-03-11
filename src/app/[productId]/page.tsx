"use client";
import ProductPage from "@/components/template/ProductPage/ProductPage";
import React from "react";

const page = ({params}: {params: {productId: string}}) => {
  const {productId} = params;
  return (
    <div>
      <ProductPage productId={productId} />
    </div>
  );
};

export default page;
