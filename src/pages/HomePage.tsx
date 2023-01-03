import React from "react";
import Banner from "../components/Banner";
import Promotions from "../components/Promotions";
import LayoutProducts from "../templates/LayoutProducts";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner />
      <LayoutProducts />
      <Promotions />
    </div>
  );
};

export default HomePage;
