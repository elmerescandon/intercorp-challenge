import Header3 from "@/components/atoms/Text/Header3/Header3";
import {DocumentTextIcon} from "@heroicons/react/24/outline";
import React from "react";

type ProductDetailProps = {
  title: string;
  description: string;
};

const ProductDetail = ({title, description}: ProductDetailProps) => {
  return (
    <div className="flex flex-col gap-2 w-[544px]">
      <div className="flex gap-2 items-center w-full">
        <DocumentTextIcon className="w-8 h-8 text-promart-orange" />
        <Header3 text={title} />
      </div>
      <p className="pl-8 text-base font-medium w-full">{description}</p>
    </div>
  );
};

export default ProductDetail;
