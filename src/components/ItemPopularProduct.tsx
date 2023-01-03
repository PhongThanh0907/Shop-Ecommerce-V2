import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

type Props = {};

const ItemPopularProduct = (props: Props) => {
  return (
    <div className="flex group">
      <div>
        <img
          src="https://gearshop.vn/upload/resizer.php?src=https://gearshop.vn/upload/products/GIGABYTE/VGA/3060Ti%20AORUS%20M/3060Ti%20AORUS%20M.JPG&w=300&h=300&q=72&zc=2"
          alt=""
        />
      </div>
      <div className="pt-6">
        <p className="text-sm text-gray-400 font-semibold ">GIGABYTE</p>
        <h1 className="text-blue-600 font-semibold py-4">
          VGA GIGABYTE RTX 3060Ti AORUS Master 8GB
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-red-500 font-semibold text-xl">29,650,000đ</p>
          <div className="flex items-center p-2 opacity-40 bg-gray-300 rounded-full mr-2 group-hover:opacity-100 duration-300 group-hover:bg-backgroundColor text-white">
            <ShoppingCartIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPopularProduct;
