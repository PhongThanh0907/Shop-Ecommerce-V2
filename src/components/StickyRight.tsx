import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

import { listIcon } from "../constants/option";
import { Link } from "react-router-dom";

const StickyRight = () => {
  return (
    <div>
      <div className="space-y-8">
        {listIcon.map((item, index) => (
          <div key={index}>
            <div className="relative p-3 bg-gray-200 rounded-full img-rotate">
              <img
                className="h-[40px] w-[40px] img-rotate"
                src={item}
                alt="logoimg"
              />
              <div className="ring-circle" />
              <div className="ring-background" />
            </div>
          </div>
        ))}
      </div>
      <div className="my-6 w-10 h-10 m-auto rounded-full bg-black/80 text-white flex items-center justify-center cursor-pointer">
        <a href="#top">
          <ArrowUpIcon className="h-6" />
        </a>
      </div>
    </div>
  );
};

export default StickyRight;
