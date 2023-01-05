import React from "react";
import { SocialIcon } from "react-social-icons";

import MenuBar from "./MenuBar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div id="top">
      <div className="grid grid-cols-1 lg:max-w-7xl lg:grid-cols-2 lg:mx-auto lg:py-3 lg:border-b lg:border-gray-200">
        <h4 className="text-center text-sm pt-4 text-gray-600 lg:pt-0">
          Welcome to GearXShop.vn
        </h4>
        <div className="flex gap-4 justify-center py-4 border-b border-gray-200 lg:border-white lg:py-0">
          <p className="text-sm text-gray-600 items-center">Recruitment Jobs</p>
          <SocialIcon
            style={{ height: 25, width: 25, border: "1" }}
            url="https://www.facebook.com/profile.php?id=100033127445154"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            url="https://www.youtube.com/"
          />
        </div>
      </div>
      <TopBar />
      <MenuBar />
    </div>
  );
};

export default Header;
