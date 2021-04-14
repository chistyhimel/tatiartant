import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/banner-images/banner-img1.png";
import img2 from "../../assets/images/banner-images/banner-img2.jpg";
import img3 from "../../assets/images/banner-images/banner-img3.jpg";
import { BannerContainer, BannerWrapper } from "./Banner.style";
import SecondaryButton from "../Buttons/SecondaryButton.component";

const Banner = () => {
  const settings = {
    dots: true,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    autoPlaySpeed: 3500,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <BannerWrapper>
        <Slider {...settings}>
          <BannerContainer>
            <img src={img1} alt="" />
            <div className="banner__img__overlay">
              <h1>Finest Handcraft Clothings</h1>
              <SecondaryButton>Shop Now</SecondaryButton>
            </div>
          </BannerContainer>

          <BannerContainer>
            <img src={img2} alt="" />
            <div className="banner__img__overlay">
              <h1>Finest Handcraft Clothings</h1>
              <SecondaryButton>Shop Now</SecondaryButton>
            </div>
          </BannerContainer>

          <BannerContainer>
            <img src={img3} alt="" />
            <div className="banner__img__overlay">
              <h1>Finest Handcraft Clothings</h1>
              <SecondaryButton>Shop Now</SecondaryButton>
            </div>
          </BannerContainer>
        </Slider>
      </BannerWrapper>
    </>
  );
};

export default Banner;
