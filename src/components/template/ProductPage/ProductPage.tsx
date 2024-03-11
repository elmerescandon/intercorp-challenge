"use client";
import ProductMain from "@/components/molecules/ProductMain/ProductMain";
import ProductSpecificationSection from "@/components/molecules/ProductSpecificationSection/ProductSpecificationSection";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import ProductSecondary from "@/components/organisms/ProductSecondary/ProductSecondary";
import {IProduct, IProductSpecification} from "@/utils/interfaces";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import React from "react";

type ProductPageProps = {
  product: IProduct;
  specs: IProductSpecification[];
  back: () => void;
};

const ProductPage = ({product, specs, back}: ProductPageProps) => {
  return (
    <div className="max-w-[1120] pb-14">
      <div className="flex w-full justify-start">
        <button
          onClick={back}
          className="flex items-center gap-2 my-4 py-2 px-4 rounded-3xl bg-promart-orange"
        >
          <ArrowLeftIcon className="w-6 h-6 text-white" />
          <p className="text-lg text-white ">Atrás</p>
        </button>
      </div>

      <div className="flex flex-col gap-8 items-center">
        {product && <ProductMain product={product} />}
        {product && <ProductSecondary product={product} />}
        {product && <ProductSpecificationSection specs={specs} />}
      </div>
    </div>
  );
};

export default ProductPage;
