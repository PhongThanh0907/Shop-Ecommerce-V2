import React from "react";
import ItemFeaturedProduct from "./ItemFeaturedProduct";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <div>
      <div className=" border-b border-gray-300 pb-4">
        <h1 className="text-xl font-semibold border-b-2 border-backgroundColor inline pb-4">
          The Featured Products
        </h1>
      </div>
      <div className="flex flex-col gap-y-6 py-8">
        <ItemFeaturedProduct />
        <ItemFeaturedProduct />
        <ItemFeaturedProduct />
        <ItemFeaturedProduct />
      </div>
    </div>
  );
};

export default FeaturedProducts;
