import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import ProductCart from "../pages/ProductCart";
import ProductDetail from "../pages/ProductDetail";
import ProductPage from "../pages/ProductPage";
import PromotionProduct from "../pages/PromotionProduct";
import Register from "../pages/Register";

export const routesGen = {
  home: "/",
};

export const state = {
  LAPTOP: "laptop",
  CARD: "card",
  PROMOTION: 1,
  BESTSELLER: 2,
};

const routes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/event",
    element: <PromotionProduct state={state.PROMOTION} />,
  },
  {
    path: "/bestseller",
    element: <PromotionProduct state={state.BESTSELLER} />,
  },
  {
    path: "/products/laptop",
    element: <ProductPage state={state.LAPTOP} />,
  },
  {
    path: "/products/graphicscard",
    element: <ProductPage state={state.CARD} />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/products/cart",
    element: <ProductCart />,
  },
  {
    path: "/products/payment",
    element: <Payment />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/register",
    element: <Register />,
  },
];

export default routes;
