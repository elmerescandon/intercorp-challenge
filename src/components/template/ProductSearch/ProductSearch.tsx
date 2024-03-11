import Header1 from "@/components/atoms/text/Header1/Header1";
import Header from "@/components/organisms/Header/Header";
import React from "react";

const ProductSearch = () => {
  return (
    <div className="px-40 pt-14">
      <Header />
      <Header1 text="¡Encuentra el producto ideal para tu hogar!" />
    </div>
  );
};

export default ProductSearch;
