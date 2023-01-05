import BestSellerPage from "../pages/BestSellerPage";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import ProductPage from "../pages/ProductPage";
import PromotionProduct from "../pages/PromotionProduct";

export const routesGen = {
  home: "/",
};

export const state = {
  LAPTOP: "laptop",
  CARD: "card",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/event",
    element: <PromotionProduct />,
  },
  {
    path: "/bestseller",
    element: <BestSellerPage />,
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
];

export default routes;
