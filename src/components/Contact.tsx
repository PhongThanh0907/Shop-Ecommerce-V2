import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="text-white bg-backgroundColor font-semibold py-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 max-w-7xl px-4 lg:px-10 mx-auto items-center">
        <div className="flex mb-4 lg:mb-0 gap-3 text-lg col-span-3">
          <PaperAirplaneIcon className="h-6 w-6" />
          <h1 className="text-sm lg:text-md">
            GearXShop - The World Buys and Sells Tech Toys, Gaming Accessories
          </h1>
        </div>
        <div className="lg:col-span-2 flex items-center">
          <input
            placeholder="Your email"
            className="lg:w-[75%] border rounded-l-3xl py-[10px] px-8 text-gray-400 focus:outline-none"
            type="text"
            name=""
            id=""
          />
          <h4 className="w-[25%] flex-1 text-center bg-black py-[10px] rounded-r-3xl opacity-70 hover:opacity-80 active:opacity-100 duration-300">
            Sign Up
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
