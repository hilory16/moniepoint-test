import styled from "styled-components";

export const BannerWrapper = styled.div`
  height: 36vh;

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }

  .slick-slide,
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);

    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);

    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .banner-slide-item {
    width: 100%;
    height: 100%;

    .banner-background {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center left;
    }

    .banner-slide-content {
      display: flex;
      align-items: flex-end;
      height: 100%;
      width: 50%;
      padding-bottom: 20px;

      .banner-title {
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 8px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.dark1};
      }

      .banner-promo {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 5px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.dark1};
      }

      .banner-desc {
        font-size: 12px;
        font-weight: 300;
        line-height: 18px;
        color: ${({ theme }) => theme.grey3};
        margin-bottom: 20px;
      }

      .banner-cta-button {
        background: ${({ theme }) => theme.dark1};
        color: ${({ theme }) => theme.white};
        font-size: 10px;
        font-weight: 300;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 0 22px;
        border-radius: 8px;
      }
    }
  }

  .banner-slide-item.slide-2 {
    .banner-slide-content {
      width: 60%;

      .banner-promo {
        font-size: 18px;
        line-height: 24px;
        font-weight: 600;
      }
    }
  }

  .banner-slide-item.slide-1 {
    .banner-background {
      background-position: center right;
    }
  }
`;
