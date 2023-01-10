import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";

type Props = {};

const Payment = (props: Props) => {
  return (
    <div>
      <CheckoutWizard activeStep={2} />
      <div className="max-w-7xl px-5 lg:px-10 mx-auto">
        <h4 className="border-b-2 border-backgroundColor pb-2 text-xl pt-10">
          Your payment
        </h4>
        <div className="grid grid-cols-2 border-b-2 border-gray-200 text-lg font-semibold pb-6 pt-4">
          <div className="flex flex-col gap-y-2">
            <h4>Product</h4>
            <h4>Chuột Razer Basilisk Ultimate × 1</h4>
            <p>Price product</p>
            <p>Shipping fee</p>
            <p>Total price</p>
          </div>
          <div className="flex flex-col gap-y-2 justify-end text-right lg:text-left">
            <h4>Total Price</h4>
            <h4>3,980,000đ</h4>
            <p>3,980,000đ</p>
            <p>Ho Chi Minh City: 30.000đ</p>
            <p>4,010,000đ</p>
          </div>
        </div>
        <div className="flex gap-2 text-md p-4 border-b border-gray-200 font-semibold">
          <input type="radio" id="cod" /> 
          <label htmlFor="cod">Payment on Delivery (COD)</label>
        </div>
        <div className="w-full py-4 text-lg font-semibold text-white rounded-3xl text-center bg-backgroundColor mt-10 cursor-pointer hover:bg-[#05bedb] active:bg-[#017e92] duration-300">
          <button>Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
