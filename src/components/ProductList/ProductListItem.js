import { Heart, Star1 } from "iconsax-react";
import { string, number, bool } from "prop-types";
import classNames from "classnames";
import useTheme from "hooks/theme";
import { ProductListItemWrapper } from "./ProductList.style";

export default function ProductListItem({
  image,
  name,
  type,
  rating,
  ratingCount,
  price,
  fav,
}) {
  const { theme } = useTheme();
  const { red, black } = theme || {};

  return (
    <ProductListItemWrapper>
      <div
        className={classNames("fav-action", {
          "fav-active": fav,
        })}
      >
        <Heart size="16" color={fav ? red : black} />
      </div>
      <div className="product-image"></div>
      <div className="product-item-content">
        <div className="product-description">
          <p className="product-type">{type}</p>
          <h3 className="product-name">{name}</h3>
        </div>
        <div className="product-meta">
          <div className="product-rating">
            <Star1 size="10" color="#f47373" />
            <p>
              {rating}| {ratingCount}
            </p>
          </div>

          <p className="product-price">{price}</p>
        </div>
      </div>
    </ProductListItemWrapper>
  );
}

ProductListItem.propTypes = {
  image: string,
  name: string,
  type: string,
  rating: number,
  ratingCount: number,
  price: string,
  fav: bool,
};
