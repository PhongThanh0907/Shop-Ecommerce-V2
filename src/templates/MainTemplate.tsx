import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Brand from "../pages/HomePage/Brand";
// import HeaderHomePage from "../pages/HomePage/HeaderHomePage";

type Props = {};

const MainTemplate = (props: Props) => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainTemplate;
