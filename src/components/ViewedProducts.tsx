import React, { useRef, HTMLProps } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import ItemYourView from "./ItemYourView";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

type Props = {};

const ViewedProduct = (props: Props) => {
  const slideRef = useRef<Slider>(null);
  const { data: products } = useSelector((state: RootState) => state.products);

  function PrevArrow(props: HTMLProps<HTMLDivElement>) {
    return (
      <div
        onClick={() => {
          slideRef.current?.slickPrev();
        }}
        className="absolute -top-[13%] right-5  z-10 cursor-pointer"
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-400" />
      </div>
    );
  }

  function NextArrow(props: HTMLProps<HTMLDivElement>) {
    return (
      <div
        className="absolute -top-[13%] right-0  z-10 cursor-pointer"
        onClick={() => {
          slideRef.current?.slickNext();
        }}
      >
        <ChevronRightIcon className="h-5 w-5 text-gray-400" />
      </div>
    );
  }
  const settings = {
    speed: 600,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <div className=" border-b border-gray-300 pb-4">
        <h1 className="text-xl font-semibold border-b-2 border-backgroundColor inline pb-4">
          Your Viewed
        </h1>
      </div>
      <div className="gap-y-6 py-8">
        <Slider {...settings} ref={slideRef}>
          {products.slice(20, 25).map((item) => (
            <ItemYourView key={item._id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ViewedProduct;
