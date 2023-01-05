import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemNewBestSeller from "./ItemNewBestSeller";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

type Props = {};

const NewBestSeller = (props: Props) => {
  const [typeMenu, setTypeMenu] = useState<number>(1);
  const { data: products } = useSelector((state: RootState) => state.products);

  const settings = {
    dots: true,
    infinite: true,
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
        {typeMenu === 1 ? (
          <>
            <Slider {...settings}>
              {products.slice(10, 20).map((item) => (
                <ItemNewBestSeller key={item._id} item={item} />
              ))}
            </Slider>
          </>
        ) : (
          <>
            <Slider {...settings}>
              {products.slice(0, 10).map((item) => (
                <ItemNewBestSeller key={item._id} item={item} />
              ))}
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default NewBestSeller;
