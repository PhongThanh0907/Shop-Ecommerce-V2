import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/product.type";
import CountDown from "./Coutdown";

const ItemPromotion = ({ item }: { item: Product }) => {
  return (
    <div className=" lg:grid grid-cols-2 gap-10">
      <div className="">
        <img
          className="h-[100%] w-[60%] mx-auto object-cover"
          src={item.imageProduct[0]}
          alt=""
        />
      </div>
      <div className="pt-10 border-t border-gray-400 mt-10 text-center">
        <Link to={`/products/${item._id}`}>
          <h1 className="text-xl text-blue-600 font-semibold">
            {item.nameProduct}
          </h1>
        </Link>

        <div className="flex my-3 justify-center gap-4">
          <p className="text-red-500 text-xl font-semibold">
            {item.price.toLocaleString("vi-VN")}đ
          </p>
          <p className="mt-[7px] text-sm line-through text-gray-400">
            {item.oldPrice === 0
              ? "19.899.000đ"
              : item.oldPrice.toLocaleString("vi-VN")}
          </p>
        </div>

        <p className="text-xl">Let buy now!!!</p>
        <CountDown hours={8} minutes={59} seconds={10} />
        <button className="text-lg font-semibold text-white bg-backgroundColor px-12 rounded-xl py-2 hover:bg-[#0099b1] active:bg-[#3498db] duration-300">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ItemPromotion;
