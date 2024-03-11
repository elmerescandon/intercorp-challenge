import {IProduct} from "@/utils/interfaces";
import React from "react";
import ProductInfo from "../ProductInfo/ProductInfo";

type ProductMainProps = {
  product: IProduct;
};

const ProductMain = ({product}: ProductMainProps) => {
  const {imageURL, name} = product;
  return (
    <div className="flex justify-between w-full max-w-[1120px]  ">
      <img
        src={imageURL}
        alt={`img-${name}`}
        className="max-w-[448px] object-contain"
      />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductMain;
