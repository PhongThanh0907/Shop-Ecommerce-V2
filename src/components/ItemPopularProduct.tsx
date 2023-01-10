import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

import { Product } from "../types/product.type";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { AddCart } from "../app/features/cart/cartReducer";

const ItemPopularProduct = ({ item }: { item: Product }) => {
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
        <div className="loading h-[210px] w-full lg:w-[440px]"></div>
      ) : (
        <div className="grid grid-cols-5 group p-4 hover:shadow-lg duration-200 gap-2">
          <div className="col-span-2">
            <img src={item.imageProduct[0]} alt="" />
          </div>
          <div className="pt-6 pb-10 col-span-3">
            <p className="text-sm text-gray-400 font-semibold ">{item.brand}</p>
            <Link to={`/products/${item._id}`}>
              <h1 className="text-blue-600 font-semibold py-4 flex h-24">
                {item.nameProduct}
              </h1>
            </Link>

            <div className="flex items-center justify-between">
              <p className="text-red-500 font-semibold text-xl">
                {item.price.toLocaleString("vi-VN")}đ
              </p>
              <div
                onClick={() => handleOrder()}
                className="flex items-center p-2 opacity-40 cursor-pointer bg-gray-300 rounded-full mr-2 group-hover:opacity-100 duration-300 group-hover:bg-backgroundColor text-white"
              >
                <ShoppingCartIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemPopularProduct;
