import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemPopularProduct from "./ItemPopularProduct";

type Props = {};

const PopularProducts = (props: Props) => {
  const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" border-b border-gray-300 pb-4">
        <h1 className="text-xl font-semibold border-b-2 border-backgroundColor inline pb-4">
          Popular Products
        </h1>
      </div>
      <div>
        <Slider {...settings}>
          <ItemPopularProduct />
          <ItemPopularProduct />
          <ItemPopularProduct />
          <ItemPopularProduct />
          <ItemPopularProduct />
          <ItemPopularProduct />
        </Slider>
      </div>
    </div>
  );
};

export default PopularProducts;
