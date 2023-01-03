import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  listProduct: JSX.Element[];
};

const SlideItem = ({ listProduct }: Props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 2,
    initialSlide: 0,
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
      <Slider {...settings}>{listProduct.map((item, index) => item)}</Slider>
    </div>
  );
};

export default SlideItem;
