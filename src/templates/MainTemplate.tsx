import React from "react";
import { Outlet } from "react-router-dom";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {};

const MainTemplate = (props: Props) => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Brands />
      <Contact />
      <Footer></Footer>
    </>
  );
};

export default MainTemplate;
