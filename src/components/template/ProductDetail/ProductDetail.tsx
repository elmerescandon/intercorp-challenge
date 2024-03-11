"use client";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import React from "react";

type ProductDetailProps = {
  productId: string;
};

const ProductDetail = ({productId}: ProductDetailProps) => {
  return (
    <div>
      <div className="px-40 pt-14">
        <Header />
        {productId}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
