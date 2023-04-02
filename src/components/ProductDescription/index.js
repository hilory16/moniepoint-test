import { Star1, Shop, ArrowUp2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useTheme from "hooks/theme";
import { numberUnit } from "utils/number";
import SingleList from "components/SingleList";
import { CustomerRating } from "components/Rating";
import Select from "components/Select";
import Pagination from "components/Pagination";
import PurchaseBtn from "components/PurchaseBtn";
import ProductListItem from "components/ProductList/ProductListItem";
import { products } from "data/products";
import { ProductItemWrapper } from "components/ProductList/ProductList.style";
import SellerInfo from "./SellerInfo";
import ReviewsList from "./ReviewsList";
import { ProductDescriptionWrapper } from "./ProductDescription.style";

export default function ProductDescription({ product }) {
  const {
    name,
    images,
    rating,
    reviewCount,
    ratingCount,
    sold,
    description,
    meta,
    store,
    lastActive,
    feedback,
    ratingBreakdown,
    priceValue,
  } = product || {};

  const { theme } = useTheme();

  const aboutItem = [
    {
      title: "Brand",
      value: meta?.brand,
    },
    {
      title: "Color",
      value: meta?.color,
    },
    {
      title: "Category",
      value: meta?.category,
    },
    {
      title: "Material",
      value: meta?.material,
    },
    {
      title: "Condition",
      value: meta?.condition,
    },
    {
      title: "Heavy",
      value: meta?.heavy,
    },
  ];

  const shipping = [
    {
      title: "Delivery",
      value: "Shipping from Jakarta, Indonesia",
    },
    {
      title: "Shipping",
      value: "FREE International Shipping",
    },
    {
      title: "Arrive",
      value: "Estimatd arrival on 25 - 27 Oct 2022",
    },
  ];

  return (
    <ProductDescriptionWrapper>
      <div className="store-area">
        <div className="store-details">
          <Shop size="18" color={theme.grey1} />
          <p className="store-name">{store}</p>
        </div>
        <h3 className="product-name">{name}</h3>
        <ul className="product-meta">
          <li className="product-rating">
            <Star1 size="10" color="#f47373" />
            <p>{rating} Ratings</p>
          </li>
          <li className="product-reviews">{reviewCount} Reviews</li>
          <li className="product-sold">{sold} Sold</li>
        </ul>
      </div>

      <div className="product-info">
        <ul className="product-info-tab">
          <li className="active">About Item</li>
          <li>Reviews</li>
        </ul>

        <ul className="about-prouduct-item">
          {aboutItem.map((item) => (
            <SingleList key={uuidv4()} {...item} />
          ))}
        </ul>
      </div>

      <div className="product-description">
        <h4 className="sub-section-title">Description:</h4>
        <ul className="product-description-list">
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="support">
          Chat us if there is anything you need to ask about the product
        </p>

        <div className="see-more">
          <span>See less</span>
          <ArrowUp2 size="16" color={theme.grey1} />
        </div>
      </div>

      <div className="shipping-info">
        <h4 className="sub-section-title">Shippings Information:</h4>
        <ul className="shipping-info-list">
          {shipping.map((item) => (
            <SingleList key={uuidv4()} {...item} />
          ))}
        </ul>
      </div>

      <SellerInfo lastActive={lastActive} feedback={feedback} theme={theme} />
      <ReviewsList
        ratingBreakdown={ratingBreakdown}
        theme={theme}
        images={images}
      />

      <div className="top-reviews">
        <div className="section-header">
          <div>
            <h4 className="sub-section-title">Top Reviews</h4>
            <p>Showing 3 of {numberUnit(ratingCount)}+ reviews</p>
          </div>
          <Select />
        </div>

        {[1, 2, 3, 4].map((item) => (
          <CustomerRating key={item} />
        ))}
        <div className="pagination-area">
          <Pagination />
          <Link to="#">
            <p className="see-more">See more</p>
          </Link>
        </div>
      </div>

      <div className="product-recommendation">
        <div className="product-recommendation-heading">
          <h4 className="sub-section-title">Recommendation</h4>
          <Link className="section-link">See more</Link>
        </div>
        <ProductItemWrapper>
          {products.slice(0, 2).map((item) => (
            <div className="products-item" key={item.name}>
              <ProductListItem {...item} />
            </div>
          ))}
        </ProductItemWrapper>
      </div>

      <PurchaseBtn price={priceValue} />
    </ProductDescriptionWrapper>
  );
}
