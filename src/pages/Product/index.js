import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { products } from "data/products";
import ProductHeader from "components/ProductHeader";
import ProductSlide from "components/ProductSlide";
import { AppWrapper } from "components/Wrappers";
import ProductDescription from "components/ProductDescription";
import { ProductWrapper } from "./Product.style";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(products[0]);

  useEffect(() => {
    // window.scroll(0, 0);
    setProduct(products.find((item) => item.id === +id));
  }, [id]);

  return (
    <motion.div
      exit={{
        opacity: 0,
        y: "50px",
        transition: { duration: 0.3 },
      }}
    >
      <ProductWrapper>
        <ProductHeader />
        <AppWrapper>
          <ProductSlide images={product.images} />
          <ProductDescription product={product} />
        </AppWrapper>
      </ProductWrapper>
    </motion.div>
  );
}
