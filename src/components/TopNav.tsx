import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { menuList } from "../constants/option";
import CancelButton from "./CancelButton";

type Props = {};

const TopNav = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="hidden lg:flex gap-10 relative">
      {menuList.map((item, index) => (
        <>
          <Link
            className={`text-md font-semibold flex items-center  ${
              item.list && openMenu ? "active-menu relative" : ""
            }`}
            to={item.link}
            onClick={() => {
              item.list ? setOpenMenu(!openMenu) : <></>;
            }}
          >
            {item.title}
            {item.list ? (
              <>
                <ChevronDownIcon className="h-3 w-3 mx-1 mt-1" />
              </>
            ) : (
              <></>
            )}
          </Link>
          {openMenu && item.list ? (
            <div
              className={`absolute px-4 py-6 left-0 border ${
                openMenu
                  ? "top-9 opacity-100 duration-300"
                  : "top-0 opacity-0 duration-300"
              }  border-t-2 border-t-backgroundColor `}
            >
              <div className="flex gap-4">
                {item.list?.map((itemMenu, index) => (
                  <Link
                    className="text-md text-gray-500 font-normal hover:text-textColor duration-300 hover:bg-gray-200 w-40 py-2 pl-4 rounded-md"
                    to={itemMenu.link}
                    key={index}
                  >
                    {itemMenu.titleMenu}
                  </Link>
                ))}
              </div>
              <div
                onClick={() => setOpenMenu(false)}
                className="absolute top-2 right-2"
              >
                <CancelButton />
              </div>
            </div>
          ) : (
            <div className="absolute px-4 py-5 left-0 -top-16 duration-500 right-0 opacity-0"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default TopNav;
