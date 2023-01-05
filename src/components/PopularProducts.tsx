import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemPopularProduct from "./ItemPopularProduct";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

type Props = {};

const PopularProducts = (props: Props) => {
  const { data: products } = useSelector((state: RootState) => state.products);

  const settings = {
    infinite: true,
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
      <div className="pt-10">
        <Slider {...settings}>
          {products.map((item) => (
            <ItemPopularProduct key={item._id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularProducts;
