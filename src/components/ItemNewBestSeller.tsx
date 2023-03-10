import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Product } from "../types/product.type";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { AddCart } from "../app/features/cart/cartReducer";

const ItemNewBestSeller = ({
  oldPrice,
  item,
}: {
  oldPrice?: number;
  item: Product;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();

  const handleOrder = () => {
    dispatch(AddCart(item));
    toast.success("Add to cart successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading h-[420px] w-full lg:w-[224px] "></div>
      ) : (
        <div className="p-6 border-r border-gray-200 group hover:shadow-lg rounded-md">
          <h1 className="text-gray-400 text-sm">Lenovo</h1>
          <Link
            to={`/products/${item._id}`}
            className="text-blue-600 font-semibold text-md h-28 flex"
          >
            {item.nameProduct}
          </Link>
          <img className="w-[100%]" src={item.imageProduct[0]} alt="" />
          <div className="flex justify-between items-center py-2 pt-6">
            <p className="text-red-500 text-xl font-semibold">
              {item.price.toLocaleString("vi-Vn")}đ
            </p>

            <p className="text-gray-400 text-sm mt-2 line-through mx-2">
              {oldPrice !== 0 && <>{oldPrice?.toLocaleString("vi-VN")}</>}
            </p>
            <div
              onClick={() => {
                handleOrder();
              }}
              className="p-2 opacity-40 bg-gray-300 rounded-full cursor-pointer mr-2 group-hover:opacity-100 duration-300 group-hover:bg-backgroundColor text-white"
            >
              <ShoppingCartIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemNewBestSeller;
