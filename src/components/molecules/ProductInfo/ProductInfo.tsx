import {IProduct} from "@/utils/interfaces";
import React from "react";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductMetadata from "../ProductMetadata/ProductMetadata";
import Header2 from "@/components/atoms/Text/Header2/Header2";

type ProductInfoProps = {
  product: IProduct;
};
const ProductInfo = ({product}: ProductInfoProps) => {
  const {category, name, brand, SKU, offerPrice, regularPrice, discount} =
    product;
  return (
    <div className="max-w-[544px] flex flex-col gap-4 justify-start">
      <p className="text-2xl font-medium">{category}</p>
      <Header2 text={name} />
      <ProductMetadata brand={brand} SKU={SKU} />
      <ProductPrice
        regularPrice={regularPrice}
        offerPrice={offerPrice}
        discount={discount}
      />
    </div>
  );
};

export default ProductInfo;
