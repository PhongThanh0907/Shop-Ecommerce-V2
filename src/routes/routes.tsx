import HomePage from "../pages/HomePage";

export const routesGen = {
  home: "/",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
];

export default routes;
