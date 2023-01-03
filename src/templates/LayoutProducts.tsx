import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import NewBestSeller from "../components/NewBestSeller";
import PopularProducts from "../components/PopularProducts";
import ViewedProducts from "../components/ViewedProducts";

type Props = {};

const LayoutProducts = (props: Props) => {
  return (
    <div className="max-w-7xl p-4 mx-auto lg:px-10 lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-1">
          <FeaturedProducts />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <NewBestSeller />
        </div>
        <div className="pt-8 lg:pt-0 col-span-1">
          <ViewedProducts />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <PopularProducts />
        </div>
      </div>
    </div>
  );
};

export default LayoutProducts;
