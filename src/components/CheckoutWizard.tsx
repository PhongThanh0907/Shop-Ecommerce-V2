import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface Props {
  activeStep: number;
  state?: string;
  nameProduct?: string;
}

const CheckoutWizard = ({ activeStep = 0, state, nameProduct }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex mb-4 lg:mb-5 flex-wrap lg:max-w-7xl mx-auto px-6 lg:px-16 ">
      {[
        "Home",
        `${state}`,
        `${nameProduct}`,
        "Địa Chỉ Giao Hàng",
        "Phương Thức Thanh Toán",
        "Xác Nhận Đơn Hàng",
      ].map((step, index) => (
        <div
          onClick={() => {
            index === 0 && navigate("/");
          }}
          key={index}
          className={`flex items-center text-sm font-semibold lg:pt-8 capitalize 
      text-center ${index <= activeStep ? "" : "hidden"} ${
            index === activeStep ? "text-gray-500" : ""
          } ${index === 0 && "cursor-pointer"}`}
        >
          {step}
          <div
            className={` ${
              index === activeStep ? "hidden" : ""
            } mx-2 text-gray-400`}
          >
            <ChevronRightIcon className="h-3 w-3 mt-1" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutWizard;
