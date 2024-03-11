"use client";import ProductMain from "@/components/molecules/ProductMain/ProductMain";
import ProductSpecificationSection from "@/components/molecules/ProductSpecificationSection/ProductSpecificationSection";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import ProductSecondary from "@/components/organisms/ProductSecondary/ProductSecondary";
import {IProduct, IProductSpecification} from "@/utils/interfaces";
import VTEXFetch from "@/utils/services/VTEX/VTEX.service";
import {VTEXProductSpecs, VTEXProductToProduct} from "@/utils/utils";
import React, {useEffect, useState} from "react";

type ProductPageProps = {
  productId: string;
};

const ProductPage = ({productId}: ProductPageProps) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [specs, setSpecs] = useState<IProductSpecification[]>([]);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    const fetchProduct = async (productId: string) => {
      const product = await VTEXFetch.getProductBySearch(productId);
      if (product.length === 0) {
        setAlert("No se encontró el SKU indicado.");
        return;
      }
      setProduct(VTEXProductToProduct(product[0]));
      setSpecs(VTEXProductSpecs(product[0]));
    };
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  return (
    <div className="max-w-[1120]">
      <div className="px-40 py-14 flex flex-col gap-8 items-center">
        <Header />
        {product && <ProductMain product={product} />}
        {product && <ProductSecondary product={product} />}
        {product && <ProductSpecificationSection specs={specs} />}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
