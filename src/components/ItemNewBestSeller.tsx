import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

type Props = {};

const ItemNewBestSeller = (props: Props) => {
  return (
    <div className="p-6 border-r border-gray-200 group hover:shadow-lg rounded-md">
      <h1 className="text-gray-400 text-sm">Lenovo</h1>
      <Link to="/" className="text-blue-600 font-semibold text-md">
        Màn hình Lenovo L24Q-35 | 23.8Inch - 2K - QHD - 75HZ - IPS
      </Link>
      <img
        className="w-[100%]"
        src="https://gearshop.vn/upload/resizer.php?src=https://gearshop.vn/upload/images/Product/Lenovo/M%C3%A0n%20h%C3%ACnh/L24Q-35/Ma%CC%80n-hi%CC%80nh-Lenovo-L24Q-35--(4).jpg&w=1200&h=1200&q=72&zc=2"
        alt=""
      />
      <div className="flex justify-between items-center">
        <p className="text-red-500 text-xl font-semibold">4,490,000</p>
        <div className="p-2 opacity-40 bg-gray-300 rounded-full mr-2 group-hover:opacity-100 duration-300 group-hover:bg-backgroundColor text-white">
          <ShoppingCartIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default ItemNewBestSeller;
