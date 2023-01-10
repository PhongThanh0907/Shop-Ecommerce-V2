import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Product } from "../types/product.type";
import { AppDispatch } from "../app/store";
import { AddCart } from "../app/features/cart/cartReducer";

const ItemProduct = ({ item }: { item: Product }) => {
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
        <div className="loading h-[300px] w-full lg:w-full"></div>
      ) : (
        <div className="grid grid-cols-7 gap-6 py-8">
          <div className="col-span-2">
            <img src={item.imageProduct[0]} alt="" />
          </div>
          <div className="col-span-3 flex flex-col justify-center">
            <h1 className="text-sm text-gray-400 mb-1">{item.brand}</h1>

            <Link
              to={`/products/${item._id}`}
              className="text-blue-600 font-semibold text-md h-28 flex"
            >
              {item.nameProduct}
            </Link>
            <div className="flex gap-1 my-1 mb-2">
              <StarIcon className="text-yellow-400 h-3 w-3" color="" />
              <StarIcon className="text-yellow-400 h-3 w-3" color="" />
              <StarIcon className="text-yellow-400 h-3 w-3" color="" />
              <StarIcon className="text-yellow-400 h-3 w-3" color="" />
              <StarIcon className="text-gray-400 h-3 w-3" color="" />
            </div>
            <p className="text-gray-400 font-semibold text-sm">
              {" "}
              - Code product: {item.productCode}
            </p>
            <p className="text-sm text-gray-500"> - Insurance: 36 months</p>
          </div>
          <div className="col-span-2 flex flex-col justify-center">
            <p className="border-b border-gray-200 pb-3 text-gray-600 text-center">
              Status: <span className="text-green-500">Stocking</span>
            </p>
            <h4 className="text-red-500 text-xl my-4 text-center">
              {item.price.toLocaleString("vi-VN")}đ
            </h4>
            <button
              onClick={() => handleOrder()}
              className="flex items-center gap-4 w-full justify-center bg-gray-200 py-2 rounded-3xl text-white font-bold hover:bg-backgroundColor duration-300 active:bg-[#01bedb]"
            >
              Buy now <ShoppingCartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemProduct;
