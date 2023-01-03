import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import PromotionProduct from "../pages/PromotionProduct";

export const routesGen = {
  home: "/",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    // state: "home",
  },
  {
    path: "/product",
    element: <ProductPage />,
    // state: "person.detail",
  },
  {
    path: "/event",
    element: <PromotionProduct />,
  },
];

export default routes;
