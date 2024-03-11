"use client";
import ProductMain from "@/components/molecules/ProductMain/ProductMain";
import ProductSpecificationSection from "@/components/molecules/ProductSpecificationSection/ProductSpecificationSection";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import ProductSecondary from "@/components/organisms/ProductSecondary/ProductSecondary";
import {IProduct} from "@/utils/interfaces";
import {productPageMockup} from "@/utils/mockups/productPageMockup";
import {productSpecsMockup} from "@/utils/mockups/productSpecsMockup";
import React, {useState} from "react";

type ProductPageProps = {
  productId: string;
};

const ProductPage = ({productId}: ProductPageProps) => {
  const [product, setProduct] = useState<IProduct | null>(productPageMockup);
  return (
    <div className="max-w-[1120]">
      <div className="px-40 py-14 flex flex-col gap-8 items-center">
        <Header />
        {product && <ProductMain product={product} />}
        {product && <ProductSecondary product={product} />}
        {product && <ProductSpecificationSection specs={productSpecsMockup} />}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
