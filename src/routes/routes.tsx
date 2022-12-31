import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

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
];

export default routes;
