import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/product.type";

const ItemYourView = ({ item }: { item: Product }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading h-[520px] w-full lg:w-[280px]"></div>
      ) : (
        <div className="text-center">
          <img className="h-full w-full" src={item.imageProduct[0]} alt="" />
          <p className="text-gray-400 text-sm my-4">{item.brand}</p>
          <Link to={`/products/${item._id}`}>
            <h1 className="mx-8">{item.nameProduct}</h1>
          </Link>
          <p className="text-red-500 text-xl mt-2 font-semibold">
            {item.price.toLocaleString("vi-Vn")}đ
          </p>
        </div>
      )}
    </>
  );
};

export default ItemYourView;
