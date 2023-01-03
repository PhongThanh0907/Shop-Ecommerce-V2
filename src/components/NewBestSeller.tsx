import React, { useState } from "react";
import ItemNewBestSeller from "./ItemNewBestSeller";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const NewBestSeller = (props: Props) => {
  const [typeMenu, setTypeMenu] = useState<number>(1);
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
      <div className="flex gap-10 text-xl font-semibold border-b border-gray-300 justify-center">
        <div
          onClick={() => setTypeMenu(1)}
          className={` ${
            typeMenu === 1 ? " border-b border-backgroundColor" : ""
          } duration-200 pb-4`}
        >
          <h4
            className={`${
              typeMenu === 1 ? "active-menu-down relative" : ""
            } duration-200`}
          >
            New Product
          </h4>
        </div>
        <div
          onClick={() => setTypeMenu(2)}
          className={` ${
            typeMenu === 2 ? " border-b border-backgroundColor" : ""
          } duration-200 pb-4`}
        >
          <h4
            className={`${
              typeMenu === 2 ? "active-menu-down relative" : ""
            } duration `}
          >
            Best Seller
          </h4>
        </div>
      </div>
      <div className="pt-10">
        <Slider {...settings}>
          <ItemNewBestSeller />
          <ItemNewBestSeller />
          <ItemNewBestSeller />
          <ItemNewBestSeller />
          <ItemNewBestSeller />
        </Slider>
      </div>
    </div>
  );
};

export default NewBestSeller;
