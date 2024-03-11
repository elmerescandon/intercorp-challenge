import Header1 from "@/components/atoms/Text/Header1/Header1";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import Header from "@/components/organisms/Header/Header";
import React from "react";

const ProductSearch = () => {
  return (
    <div className="px-40 pt-14">
      <Header />
      <div className="flex flex-col items-center gap-16">
        <Header1 text="¡Encuentra el producto ideal para tu hogar!" />
        <SearchBar />
      </div>
    </div>
  );
};

export default ProductSearch;
