import React from "react";import ProductInfo from "../ProductInfo/ProductInfo";
import {IProduct} from "@/utils/interfaces";

type ProductCardProps = {
  product: IProduct;
  goDetail: () => void;
};

const ProductCard = ({product, goDetail}: ProductCardProps) => {
  const {imageURL, name} = product;
  return (
    <div className="flex justify-between w-full max-w-[1120px]  ">
      <img
        src={imageURL}
        alt={`img-${name}`}
        className="max-w-[448px] object-contain"
      />
      <div className="flex flex-col gap-8">
        <ProductInfo product={product} />
        <button
          onClick={goDetail}
          className="rounded-xl w-1/2 block px-4 py-2 bg-promart-orange text-white text-base font-semibold text-center
          hover:bg-promart-soft-orange hover:text-promart-dark-gray transition-all duration-300 ease-in-out
          active:transform active:scale-95 active:bg-promart-dark-gray active:text-promart-orange
          "
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
