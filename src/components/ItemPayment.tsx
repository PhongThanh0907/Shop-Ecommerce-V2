import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CustomInput from "./CustomInput";
type Props = {};

const ItemPayment = (props: Props) => {
  const [quantityProduct, setQuantityProduct] = useState<number>(1);

  const getQuanity = (childData: number) => {
    setQuantityProduct(childData);
  };

  return (
    <div className="grid grid-cols-12 py-4 border-b border-gray-200 items-center">
      <div className="col-span-1 mx-auto">
        <XMarkIcon className=" h-6 w-6 text-center hover:text-red-500 duration-300" />
      </div>
      <div className="col-span-5 grid grid-cols-5 items-center gap-4">
        <div className="col-span-1 border border-gray-200">
          <img
            src="https://gearshop.vn/upload/images/Product/Razer/Chu%E1%BB%99t/Razer%20Basilisk%20Ultimate/chuot-razer-basilisk-ultimate-ban-khong-dock-sac6982b6fb4d0-(2).jpg"
            alt=""
          />
        </div>
        <div className="col-span-4 truncate">
          <h1 className="text-lg">Chuột Razer Basilisk Ultimate</h1>
        </div>
      </div>
      <p className="col-span-2 text-center text-lg">3,980,000đ</p>
      <div className="col-span-2 flex justify-center ">
        <CustomInput quantity={getQuanity} />
      </div>
      <p className="col-span-2 text-center text-lg">
        {(quantityProduct * 3980000).toLocaleString("vi-Vn")}đ
      </p>
    </div>
  );
};

export default ItemPayment;
