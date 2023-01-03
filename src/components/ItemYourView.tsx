import React from "react";

type Props = {};

const ItemYourView = (props: Props) => {
  return (
    <div className="text-center">
      <img
        className="h-full w-full"
        src="https://gearshop.vn/upload/resizer.php?src=https://gearshop.vn/upload/images/Product/Akko/Kit/MOD007S/Kit-AKKO-Designer-Studio-MOD007S.jpg&w=250&h=232&q=72&zc=2"
        alt=""
      />
      <p className="text-gray-400 text-sm my-4">KIT AKKO</p>
      <h1 className="mx-8">Kit AKKO Designer Studio MOD007S</h1>
      <p className="text-red-500 text-xl mt-2 font-semibold">4,999,000</p>
    </div>
  );
};

export default ItemYourView;
