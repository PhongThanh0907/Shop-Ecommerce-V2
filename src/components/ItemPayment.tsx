import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import CustomInput from "./CustomInput";
import { Item } from "../types/Item";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { RemoveCart } from "../app/features/cart/cartReducer";

const ItemPayment = ({ cartItem }: { cartItem: Item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [quantityProduct, setQuantityProduct] = useState<number>(1);

  const getQuanity = (childData: number) => {
    setQuantityProduct(childData);
  };

  return (
    <div className="grid grid-cols-12 py-4 border-b border-gray-200 items-center">
      <div
        onClick={() => dispatch(RemoveCart({ id: cartItem._id }))}
        className="col-span-1 mx-auto cursor-pointer"
      >
        <XMarkIcon className="h-4 w-4 lg:h-6 lg:w-6 text-center hover:text-red-500 duration-300" />
      </div>
      <div className="col-span-5 grid grid-cols-5 items-center gap-4">
        <div className="col-span-2 lg:col-span-1 border border-gray-200">
          <img src={cartItem.imageProduct[0]} alt="" />
        </div>
        <div className="col-span-3 lg:col-span-4 truncate">
          <h1 className="text-sm lg:text-lg truncate">
            {cartItem.nameProduct}
          </h1>
        </div>
      </div>
      <p className="col-span-2 hidden lg:inline text-center text-lg">
        {cartItem.price.toLocaleString("vi-VN")}đ
      </p>
      <div className="col-span-3 lg:col-span-2 flex justify-center ">
        <CustomInput item={cartItem} quantity={getQuanity} />
      </div>
      <p className="col-span-3 lg:col-span-2 text-center text-sm lg:text-lg">
        {(quantityProduct * cartItem.price).toLocaleString("vi-Vn")}đ
      </p>
    </div>
  );
};

export default ItemPayment;
