"use client";
import Header1 from "@/components/atoms/Text/Header1/Header1";
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import BenefitSection from "@/components/organisms/BenefitSection/BenefitSection";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import {IProduct} from "@/utils/interfaces";
import VTEXFetch from "@/utils/services/VTEX/VTEX.service";
import {VTEXProductToProduct, delay} from "@/utils/utils";
import React, {useState} from "react";

const ProductSearch = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const [product, setProduct] = useState<IProduct | null>(null);

  const handleSearch = async (value: string) => {
    try {
      setAlert("");
      setLoading(true);
      await delay(300);
      const product = await VTEXFetch.getProductBySearch(value);
      if (product.length === 0) {
        setAlert("No se encontró el SKU indicado.");
        setLoading(false);
        return;
      }
      setProduct(VTEXProductToProduct(product[0]));
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setAlert((e as Error).message);
    }
  };

  return (
    <div>
      <div className="px-40 pt-14">
        <Header />
        <div className="flex flex-col items-center gap-16 flex-grow pb-16">
          <Header1 text="¡Encuentra el producto ideal para tu hogar!" />
          <SearchBar
            handleSearch={handleSearch}
            alert={alert}
            setAlert={setAlert}
            loading={loading}
          />
          {!loading && product && <ProductCard product={product} />}
          <BenefitSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSearch;
