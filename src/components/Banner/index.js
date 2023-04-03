import React from "react";
import Slider from "react-slick";
import { AppWrapper } from "components/Wrappers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerWrapper } from "./Banner.style";
import { Link } from "react-router-dom";

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "ease-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  const slides = [
    {
      image: "banner-1.jpg",
      title: "#FASHION DAY",
      heading: "80% OFF",
      desc: " Discover fashion that suits to your style",
    },
    {
      image: "banner-2.jpg",
      title: "#BEAUTYSALE",
      heading: "DISCOVER OUR BEAUTY SELECTION",
      desc: "",
    },
    {
      image: "banner-4.jpg",
      title: "#FASHION DAY",
      heading: "80% OFF",
      desc: " Discover fashion that suits to your style",
    },
  ];

  return (
    <BannerWrapper>
      <Slider {...settings}>
        {slides.map(({ title, desc, heading, image }, index) => (
          <div className={`banner-slide-item slide-${index + 1}`} key={title}>
            <div
              className="banner-background"
              style={{
                backgroundImage: `url(${require(`assets/images/${image}`)})`,
              }}
            >
              <div className="banner-slide-content">
                <AppWrapper>
                  <h3 className="banner-title">{title}</h3>
                  <h1 className="banner-promo">{heading}</h1>
                  <p className="banner-desc">{desc}</p>
                  <Link to="#">
                    <div className="banner-cta-button">
                      <p> Check this out</p>
                    </div>
                  </Link>
                </AppWrapper>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </BannerWrapper>
  );
}
