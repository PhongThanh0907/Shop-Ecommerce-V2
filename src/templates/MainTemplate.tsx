import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { GetListProduct } from "../app/features/product/reducer";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyLeft from "../components/StickyLeft";
import StickyRight from "../components/StickyRight";
import { useFetch } from "../hooks/useFetch";

type Props = {};

const MainTemplate = (props: Props) => {
  const dispatch = useDispatch();
  const { data: products } = useFetch("products/");

  useEffect(() => {
    dispatch(GetListProduct(products));
  }, [products]);

  return (
    <>
      <Header></Header>
      <Outlet />
      <Brands />
      <Contact />
      <section className="hidden lg:inline fixed bottom-24 left-4">
        <StickyLeft />
      </section>
      <section className="hidden lg:inline fixed bottom-20 right-4">
        <StickyRight />
      </section>
      <Footer></Footer>
    </>
  );
};

export default MainTemplate;
