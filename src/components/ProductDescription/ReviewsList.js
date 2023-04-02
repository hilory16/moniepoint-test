import { Star1 } from "iconsax-react";
import { v4 as uuidv4 } from "uuid";
import { object, array } from "prop-types";
import classNames from "classnames";
import { numberUnit } from "utils/number";
import { ReviewGuage, ReviewsListWrapper } from "./ProductDescription.style";

export default function ReviewsList({ ratingBreakdown, theme, images }) {
  const getPercentage = (val) => {
    const total = ratingBreakdown.reduce((acc, current) => acc + current, 0);
    return Math.ceil((val / total) * 100);
  };

  return (
    <ReviewsListWrapper>
      <div className="review-rating">
        <h4 className="sub-section-title">Reviews & Ratings</h4>
        <div className="review-rating-content">
          <div className="average-rating">
            <div>
              <h5>
                <span className="big"> 4.9 </span>
                <span className="small">/ 5.0</span>
              </h5>

              <div className="full-stars">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star1 size="14" color={theme.gold} key={uuidv4()} />
                ))}
              </div>
            </div>

            <p className="total-reviews">2.3k+ review</p>
          </div>
          <ul className="rating-breakdown">
            {ratingBreakdown.map((item, index) => (
              <li key={item}>
                <div className="stars">
                  <Star1 size="14" color={theme.gold} />
                  <p>{5 - index}</p>
                </div>
                <ReviewGuage className="gauge" gauge={getPercentage(item)}>
                  <div className="rating-meter"></div>
                  <p className="actual-rating-figure">{numberUnit(item)}</p>
                </ReviewGuage>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="review-pictures">
        <h4 className="sub-section-title">Reviews with images &amp; videos</h4>
        <div className="review-image-list">
          {images.slice(0, 4).map((item, index) => (
            <div
              className={classNames("review-image", {
                "review-image-last": index === 3,
              })}
            >
              <img src={item} alt="review-img" />
              {index === 3 && <p className="sub-rate">132+</p>}
            </div>
          ))}
        </div>
      </div>
    </ReviewsListWrapper>
  );
}

ReviewsList.propTypes = {
  ratingBreakdown: array,
  theme: object,
  images: array,
};
