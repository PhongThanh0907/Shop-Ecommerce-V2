import React, { useRef, HTMLProps } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { listBrand } from "../constants/option";

type Props = {};

const Brands = (props: Props) => {
  const slideRef = useRef<Slider>(null);

  function PrevArrow(props: HTMLProps<HTMLDivElement>) {
    return (
      <div
        onClick={() => {
          slideRef.current?.slickPrev();
        }}
        className="absolute -left-8 top-2 lg:left-0 z-10 cursor-pointer lg:top-1/3"
      >
        <ChevronLeftIcon className="h-7 w-7 text-gray-300 hover:text-gray-600 duration-200" />
      </div>
    );
  }

  function NextArrow(props: HTMLProps<HTMLDivElement>) {
    return (
      <div
        className="absolute -right-8 top-2 lg:right-0 z-10 cursor-pointer lg:top-1/3"
        onClick={() => {
          slideRef.current?.slickNext();
        }}
      >
        <ChevronRightIcon className="h-7 w-7 text-gray-300 hover:text-gray-600 duration-200" />
      </div>
    );
  }
  const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl px-10 mx-auto relative py-6 border-t border-b border-gray-300 my-20">
      <Slider {...settings} ref={slideRef}>
        {listBrand.map((item, index) => (
          <div
            key={index}
            className="flex items-center  justify-center mx-10 opacity-40 hover:opacity-100 duration-300"
          >
            <img className="w-40% " src={item} alt="logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;
