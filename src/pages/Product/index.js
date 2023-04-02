import React from "react";
import { useParams } from "react-router-dom";
import { products } from "data/products";
import ProductHeader from "components/ProductHeader";
import ProductSlide from "components/ProductSlide";
import { AppWrapper } from "components/Wrappers";
import ProductDescription from "components/ProductDescription";
import { ProductWrapper } from "./Product.style";

export default function Product() {
  let { id } = useParams();
  const product = products.find((item) => item.id === +id);
  return (
    <ProductWrapper>
      <ProductHeader />
      <AppWrapper>
        <ProductSlide />
        <ProductDescription product={product} />
      </AppWrapper>
    </ProductWrapper>
  );
}
