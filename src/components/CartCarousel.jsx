import React from "react";
import CardItem from "./CardItem";
import Slider from "react-slick";
import "../css/slick.css";
import "../css/slick-theme.css";

const CardCarousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <CardItem title="Ajman Offshore" price="$2,997" />
        </div>
        <div>
          <CardItem title="Rak Icc" price="$2,997" />
        </div>
        <div>
          <CardItem title="Sharjah Media City" price="$4,124" />
        </div>
      </Slider>
    </div>
  );
};

export default CardCarousel;
