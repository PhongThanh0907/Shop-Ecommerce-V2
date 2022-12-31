import React from "react";
import Banner from "../components/Banner";
import LayoutProducts from "../templates/LayoutProducts";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner />
      <LayoutProducts />
    </div>
  );
};

export default HomePage;
