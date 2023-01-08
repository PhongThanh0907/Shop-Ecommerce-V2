import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CheckoutWizard from "../components/CheckoutWizard";
import ItemPayment from "../components/ItemPayment";

type Props = {};

const ProductCart = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <CheckoutWizard activeStep={1} />
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-12 border-b border-gray-200 text-center text-gray-500 pb-4">
          <h4 className="col-span-6">Product</h4>
          <h4 className="col-span-2">Price</h4>
          <h4 className="col-span-2">Count</h4>
          <h4 className="col-span-2">Total</h4>
        </div>
        <div className="w-full">
          <ItemPayment />
        </div>
        <div>
          <div className="flex justify-end mr-16 border-b border-gray-200 py-4">
            <span>
              Total Price: <b>3,990,000đ</b>
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/products/payment")}
            className="px-8 py-2 bg-backgroundColor text-white font-bold rounded-3xl mt-20 mr-8 hover:bg-[#05bedb] active:bg-[#017e92] duration-300"
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
