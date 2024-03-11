import DiscountText from "@/components/atoms/Text/DiscountText/DiscountText";
import React from "react";

type ProductPriceProps = {
  regularPrice: number;
  offerPrice: number;
  discount: number;
};

const ProductPrice = ({
  regularPrice,
  offerPrice,
  discount,
}: ProductPriceProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <p className="font-bold text-base">{`Antes: S/.${regularPrice}`}</p>
      <div className="flex gap-2 justify-start items-end">
        <p className="font-bold text-base">Ahora:</p>
        <div className="flex gap-2 justify-start items-center">
          <p className="text-4xl font-bold tracking-tight">{`S/. ${offerPrice} `}</p>
          <DiscountText discount={discount} />
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
