import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Product } from "../types/product.type";
import ItemFeaturedProduct from "./ItemFeaturedProduct";
import { RootState } from "../app/store";

type Props = {};

const FeaturedProducts = (props: Props) => {
  const { data: products, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  return (
    <div>
      <div className=" border-b border-gray-300 pb-4">
        <h1 className="text-xl font-semibold border-b-2 border-backgroundColor inline pb-4">
          The Featured Products
        </h1>
      </div>
      <div className="flex flex-col gap-y-6 py-8">
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          <>
            {products.slice(2, 6).map((item: Product) => (
              <ItemFeaturedProduct key={item._id} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
