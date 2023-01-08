import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import MenuIcon from "./MenuIcon";
import { menuBar } from "../constants/option";
import CancelButton from "./CancelButton";
import CartUser from "./CartUser";
type Props = {};

const MenuBar = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="my-8 lg:my-0 bg-backgroundColor text-white">
      <div className="grid grid-cols-1 py-6 gap-y-4 lg:gap-y-0 lg:grid-cols-4 max-w-7xl mx-auto lg:py-2">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="hidden lg:flex items-center col-span-1 justify-center gap-2 cursor-pointer relative"
        >
          <MenuIcon openMenuMobile={openMenu} />
          <h4 className="text-lg font-semibold">Menu List</h4>
          <ChevronDownIcon className="h-5 w-5 mt-1" />
          {openMenu ? (
            <div className="absolute top-12 border-2 border-backgroundColor flex flex-col bg-white text-black font-semibold left-0 right-0 z-10 px-5 py-2 h-56 opacity-100 duration-300 w-80">
              {menuBar.map((item, index) => (
                <>
                  <Link
                    className={` py-3 ${
                      index < menuBar.length - 1
                        ? "border-b border-gray-300 px-2"
                        : "flex items-center justify-between group px-2"
                    } hover:bg-gray-200 duration-300 rounded-md`}
                    state={item.title}
                    to={item.link}
                    key={index}
                  >
                    {item.title}
                    {item.list ? (
                      <ChevronRightIcon className="w-3 h-3 mt-1" />
                    ) : (
                      <></>
                    )}
                    {item.list ? (
                      <>
                        <div className="opacity-0 w-0 group-hover:visible group-hover:opacity-100 absolute left-[100%] top-[-2px] group-hover:w-[700px] duration-500 bottom-[-2px] bg-white border-2 border-backgroundColor flex px-4 py-4 gap-4">
                          {item.list.map((item, index) => (
                            <Link
                              className="w-40 h-10 flex items-center px-4  hover:bg-gray-200 duration-300 rounded-md font-normal"
                              key={index}
                              to={item.link}
                            >
                              {item.titleMenu}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </Link>
                </>
              ))}
              <div className="absolute right-1 top-3">
                <CancelButton />
              </div>
            </div>
          ) : (
            <div className="absolute h-0 opacity-0 top-12 duration-500 w-80"></div>
          )}
        </div>
        <div className="flex col-span-2 px-8">
          <input
            className="p-2 w-full px-8 focus:outline-none focus:shadow-outline text-gray-500 rounded-l-3xl"
            type="text"
            placeholder="Search..."
            // onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="p-2 px-6 bg-black opacity-70 col-span-1 rounded-r-3xl hover:opacity-85 duration-300 active:opacity-100">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <CartUser />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
