import ProductPage from "@/components/template/ProductPage/ProductPage";import React from "react";

export async function generateStaticParams() {
  return [{productId: "140558"}, {productId: "146570"}];
}

const page = ({params}: {params: {productId: string}}) => {
  const {productId} = params;
  return (
    <div>
      <ProductPage productId={productId} />
    </div>
  );
};

export default page;
