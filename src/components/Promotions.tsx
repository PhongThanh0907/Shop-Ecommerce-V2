import React, { HTMLProps, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ItemPromotion from "../components/ItemPromotion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {};

const Promotions = (props: Props) => {
  const slideRef = useRef<Slider>(null);

  function PrevArrow(props: HTMLProps<HTMLDivElement>) {
    return (
      <div
        onClick={() => {
          slideRef.current?.slickPrev();
        }}
        className="absolute cursor-pointer -top-20 -left-10 lg:top-0 z-10 lg:left-[56%] flex items-center justify-center gap-2"
      >
        <ChevronLeftIcon className="h-6 w-6" />
        Xem trước
      </div>
    );
  }

  function NextArrow(props: HTMLProps<HTMLDivElement>) {
    return (
      <div
        className="absolute cursor-pointer -top-20 lg:top-0 z-10  flex -right-11 lg:right-0 items-center gap-2"
        onClick={() => {
          slideRef.current?.slickNext();
        }}
      >
        Xem tiếp
        <ChevronRightIcon className="h-6 w-6 text-gray-500" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="px-4 mt-10 lg:mt-0 max-w-7xl lg:px-10 mx-auto">
      <div className=" border-b border-gray-300 pb-4">
        <h1 className="text-xl font-semibold border-b-2 border-backgroundColor inline pb-4">
          Best Deal In Week
        </h1>
      </div>
      <div className="relative p-10 mt-16 lg:mt-10 border-2 border-backgroundColor lg:mx-20 rounded-lg">
        <Slider {...settings} ref={slideRef}>
          <ItemPromotion />
          <ItemPromotion />
          <ItemPromotion />
          <ItemPromotion />
        </Slider>
      </div>
    </div>
  );
};

export default Promotions;
