import {
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { OpenModalCart } from "../app/features/cart/cartReducer";

const CartUser = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex items-center justify-center gap-6 relative">
      <HeartIcon className="h-6 w-6 cursor-pointer" />
      <Link to="/user/login">
        <UserIcon className="h-6 w-6 cursor-pointer" />
      </Link>
      <div
        onClick={() => {
          dispatch(OpenModalCart(true));
        }}
        className="flex items-center gap-1 relative cursor-pointer"
      >
        <ShoppingBagIcon className="h-6 w-6" />
        <span className="absolute -top-2 right-1/2 px-1 bg-red-500 text-sm rounded-full font-bold">
          {cart.length}
        </span>
        <span className="text-sm font-bold mt-1 top-12">Cart</span>
      </div>
    </div>
  );
};

export default CartUser;
