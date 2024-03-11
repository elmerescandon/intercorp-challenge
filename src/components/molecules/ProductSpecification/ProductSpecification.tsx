import React from "react";

type ProductSpecificationProps = {
  specName: string;
  spectText: string;
};

const ProductSpecification = ({
  specName,
  spectText,
}: ProductSpecificationProps) => {
  return (
    <div
      flex-col
      w-full
      className={`flex  w-full
      ${
        spectText.length > 50
          ? "flex-col justify-start items-start gap-2"
          : "flex-row justify-between items-center"
      }
    
    
    `}
    >
      <p className="font-medium text-base text-black">{specName}</p>
      <p className="font-medium text-base text-promart-subtle-gray ">
        {spectText}
      </p>
    </div>
  );
};

export default ProductSpecification;
