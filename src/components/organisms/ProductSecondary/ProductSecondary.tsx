import ProductDetail from "@/components/molecules/ProductDetail/ProductDetail";
import {IProduct} from "@/utils/interfaces";
import React from "react";

type ProductSecondaryProps = {
  product: IProduct;
};

const ProductSecondary = ({product}: ProductSecondaryProps) => {
  const {description, characteristics} = product;
  return (
    <div className="flex gap-8 justify-center items-start w-full max-lg:flex-col ">
      <ProductDetail title="Descripción" description={description} />
      <ProductDetail title="Características" description={characteristics} />
    </div>
  );
};

export default ProductSecondary;
