import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import MenuIcon from "./MenuIcon";
import TopNav from "./TopNav";

const TopBar = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);

  return (
    <div className="lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
      <div className="flex items-center justify-center py-4">
        <img className="h-16 w-16" src={Logo} alt="logo" />
        <Link to="/">
          <h1 className="italic text-2xl font-bold">GEARXSHOP</h1>
        </Link>
        <div
          className="lg:hidden ml-10"
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <MenuIcon openMenuMobile={openMenuMobile} />
        </div>
      </div>
      <TopNav openMenuMobile={openMenuMobile} />
      <div className="flex items-center gap-4 justify-center">
        <img
          className="h-10 w-10"
          src="https://e-commerce-dinhtri123.vercel.app/tech-support.gif"
          alt="logo-support"
        />
        <div className="text-sm text-gray-500">
          <p>0938.458.350 - 0979.399.509</p>
          <p>phong.thanh971997@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
