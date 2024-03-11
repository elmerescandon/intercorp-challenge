import Header1 from "@/components/atoms/Text/Header1/Header1";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import BenefitSection from "@/components/organisms/BenefitSection/BenefitSection";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import React from "react";

const ProductSearch = () => {
  return (
    <div>
      <div className="px-40 pt-14">
        <Header />
        <div className="flex flex-col items-center gap-16 flex-grow pb-16">
          <Header1 text="¡Encuentra el producto ideal para tu hogar!" />
          <SearchBar />
          <BenefitSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSearch;
