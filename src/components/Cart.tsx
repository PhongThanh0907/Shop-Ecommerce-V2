import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "../app/store";
import CancelButton from "./CancelButton";
import { OpenModalCart } from "../app/features/cart/cartReducer";
import LoadingButton from "./LoadingButton";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart, openModal } = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setLoading(true);
  }, [cart]);
  return (
    <div>
      {openModal ? (
        <div className="absolute top-12 -left-4 -right-4 bg-white border-2 border-backgroundColor p-8 opacity-100 duration-300 z-20">
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <>
                  {loading ? (
                    <div className="flex justify-center py-5">
                      <LoadingButton />
                    </div>
                  ) : (
                    <div className="grid grid-cols-5 gap-2 border-b border-gray-200">
                      <div className="col-span-2">
                        {item?.imageProduct.slice(0, 1).map((e) => (
                          <img src={e} alt="logo" />
                        ))}
                      </div>
                      <div className="col-span-3">
                        <h1 className="text-sm text-blue-600 font-semibold mt-2">
                          {item?.nameProduct}
                        </h1>
                        <p className="text-gray-700 mt-2">
                          {item.numberCount} <span>x</span>{" "}
                          {item?.price?.toLocaleString("vi-VN")}đ
                        </p>
                      </div>
                    </div>
                  )}
                </>
              ))}
              <p className="mt-4 font-semibold text-black">
                Total price:{" "}
                <span className="text-red-500 font-bold">
                  {cart.length < 1
                    ? 0
                    : cart
                        .map((i) => i.totalCount)
                        .reduce((total, cv) => total + cv)
                        .toLocaleString("vn-Vn")}
                </span>
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    navigate("/products/cart");
                    dispatch(OpenModalCart(false));
                  }}
                  className="w-[50%] text-center bg-backgroundColor text-white font-bold mt-4 py-2 rounded-3xl"
                >
                  Order
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-black">No products in your cart</p>
            </>
          )}

          <div
            onClick={() => {
              dispatch(OpenModalCart(false));
            }}
            className="absolute top-4 right-4"
          >
            <CancelButton />
          </div>
        </div>
      ) : (
        <div className="-top-[500px] -left-10 -right-10 duration-300 opacity-0 bg-white absolute"></div>
      )}
    </div>
  );
};

export default Cart;
