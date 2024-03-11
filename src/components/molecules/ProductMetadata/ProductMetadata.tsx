import React from "react";

type ProductMetadataProps = {
  brand: string;
  SKU: string;
};

const ProductMetadata = ({brand, SKU}: ProductMetadataProps) => {
  return (
    <div className="flex flex-col gap-1 text-promart-subtle-gray">
      <p>{`Marca: ${brand} `}</p>
      <p>{`SKU: ${SKU} `}</p>
    </div>
  );
};

export default ProductMetadata;
