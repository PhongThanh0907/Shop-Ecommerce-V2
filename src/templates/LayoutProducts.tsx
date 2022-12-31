import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import NewBestSeller from "../components/NewBestSeller";

type Props = {};

const LayoutProducts = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-8">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <FeaturedProducts />
        </div>
        <div className="col-span-3">
          <NewBestSeller />
        </div>
      </div>
    </div>
  );
};

export default LayoutProducts;
