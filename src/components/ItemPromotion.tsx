import React from "react";
import CountDown from "./Coutdown";

type Props = {};

const ItemPromotion = (props: Props) => {
  return (
    <div className=" lg:flex gap-10">
      <div className="">
        <img
          className="h-[100%] w-[75%] mx-auto"
          src="https://gearshop.vn/upload/resizer.php?src=https://gearshop.vn/upload/images/Product/Leopold/FC900R%20BT%20Coral%20Blue/Leopold-FC900R-BT-Coral-Blue-(9).jpg&w=600&h=600&q=72&zc=2"
          alt=""
        />
      </div>
      <div className="pt-10 border-t border-gray-400 mt-10 text-center">
        <h1 className="text-xl text-blue-600 font-semibold">
          Keyboard Leopold FC900R BT Coral Blue | Cherry Switch
        </h1>
        <div className="flex my-3 justify-center gap-4">
          <p className="text-red-500 text-xl font-semibold">3,750,000đ</p>
          <p className="mt-[7px] text-sm line-through text-gray-400">
            3,950,000đ
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
