import React from "react";

type DiscountTextProps = {
  discount: number;
};

const DiscountText = ({discount}: DiscountTextProps) => {
  return (
    <div className="flex justify-center items-center bg-promart-orange rounded-3xl text-sm font-semibold text-white text-center p-2 w-10 h-10">
      {`${discount}%`}
    </div>
  );
};

export default DiscountText;
