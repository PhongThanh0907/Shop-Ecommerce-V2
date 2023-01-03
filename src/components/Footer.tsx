import React from "react";
import Logo from "../assets/logo.png";
import { listFooter } from "../constants/option";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="max-w-7xl px-4 lg:px-10 mx-auto grid grid-cols-1 lg:grid-cols-5 pt-8">
        <div className="col-span-2 mb-6 lg:mb-0">
          <div className="flex items-center gap-1">
            <img className="h-16 w-16" src={Logo} alt="logo" />
            <h1 className="italic text-2xl font-bold">GEARXSHOP</h1>
          </div>
          <div className="flex items-center my-2 gap-4">
            <img
              className="h-14 w-14"
              src="https://e-commerce-dinhtri123.vercel.app/tech-support.gif"
              alt="logo-support"
            />
            <div>
              <p className="text-sm text-gray-400">Support Channel:</p>
              <p className="text-xl font-semibold">0938.458.350</p>
            </div>
          </div>
          <p className="text-sm font-semibold">Address</p>
          <p>52 Trần Minh Quyền, Phường 11, Quận 10, Tp Hồ Chí Minh</p>
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-y-6 lg:gap-y-0 lg:grid-cols-3">
          {listFooter.map((item, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg pb-3">{item.title}</h4>
              <ul>
                {item.label.map((e) => (
                  <li className="mb-1 text-md text-gray-600">{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-200 py-5 mt-10">
        <h1 className="max-w-7xl px-10 mx-auto">
          © <b>GearXshop.vn</b> - All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
