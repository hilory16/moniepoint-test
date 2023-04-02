import { useState } from "react";
import { array } from "prop-types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ProductSlideWrapper } from "./ProductSlide.style";

export default function ProductSlide({ images }) {
  const [active, setActive] = useState(images[0]);
  console.log(images);
  return (
    <ProductSlideWrapper>
      <div className="featured-image">
        <img src={active} alt="" className="primary-img" />
        <div className="image-options">
          {images.map((item) => (
            <div className="image-option-item" key={item}>
              <img src={item} alt="" onClick={() => setActive(item)} />
            </div>
          ))}
        </div>
      </div>
    </ProductSlideWrapper>
  );
}

ProductSlide.propTypes = {
  images: array,
};
