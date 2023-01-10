import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";

import CheckoutWizard from "../components/CheckoutWizard";
import ItemPayment from "../components/ItemPayment";
import LoadingButton from "../components/LoadingButton";

type Props = {};

const ProductCart = (props: Props) => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <CheckoutWizard activeStep={1} />
      {loading ? (
        <div className="flex justify-center py-10">
          <LoadingButton />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto lg:px-10 py-4 lg:py-0">
          <div className="grid grid-cols-12 border-b border-gray-200 text-center text-gray-500 pb-4">
            <h4 className="col-span-6">Product</h4>
            <h4 className="col-span-2 hidden lg:inline">Price</h4>
            <h4 className="col-span-3 lg:col-span-2">Count</h4>
            <h4 className="col-span-3 lg:col-span-2">Total</h4>
          </div>
          <div className="w-full">
            {cart.map((item) => (
              <ItemPayment key={item._id} cartItem={item} />
            ))}
          </div>
          <div>
            <div className="flex justify-end mr-4 lg:mr-16 border-b border-gray-200 py-4 text-lg">
              <span>
                Total Price:{" "}
                {cart.length < 1
                  ? 0
                  : cart
                      .map((i) => i.totalCount)
                      .reduce((total, cv) => total + cv)
                      .toLocaleString("vn-Vn")}
                đ
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/products/payment")}
              className="px-8 py-2 bg-backgroundColor text-white font-bold rounded-3xl mt-6 lg:mt-10 mr-8 hover:bg-[#05bedb] active:bg-[#017e92] duration-300"
            >
              Pay now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
