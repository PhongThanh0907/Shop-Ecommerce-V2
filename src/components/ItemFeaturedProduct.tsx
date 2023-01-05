import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Product } from "../types/product.type";

const ItemFeaturedProduct = ({ item }: { item: Product }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading h-[116px] w-full lg:w-[280px]"></div>
      ) : (
        <div className="flex gap-4">
          <img className="w-[30%]" src={item.imageProduct[0]} alt="" />
          <div>
            <Link to={`/products/${item._id}`}>
              <h1 className="font-semibold">{item.nameProduct}</h1>
            </Link>
            <p className="line-through text-gray-400 text-xs font-semibold">
              {item.oldPrice === 0 ? (
                <></>
              ) : (
                <>{item.oldPrice.toLocaleString("vi-VN")}đ</>
              )}
            </p>
            <p className="text-red-500 text-lg font-bold">
              {item.price.toLocaleString("vi-VN")}đ
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemFeaturedProduct;
