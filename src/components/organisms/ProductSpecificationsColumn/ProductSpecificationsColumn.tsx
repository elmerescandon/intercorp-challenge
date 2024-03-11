import ProductSpecification from "@/components/molecules/ProductSpecification/ProductSpecification";
import {IProductSpecification} from "@/utils/interfaces";
import React from "react";

type ProductSpecificationsColumnProps = {
  specs: IProductSpecification[];
};

const ProductSpecificationsColumn = ({
  specs,
}: ProductSpecificationsColumnProps) => {
  return (
    <div className="pl-8 flex flex-col gap-4 w-full">
      {specs.map((spec, index) => {
        return (
          <ProductSpecification
            specName={spec.specName}
            spectText={spec.spectText}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ProductSpecificationsColumn;
