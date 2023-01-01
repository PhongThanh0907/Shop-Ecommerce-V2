import React, { useState } from "react";
import ItemNewBestSeller from "./ItemNewBestSeller";

type Props = {};

const NewBestSeller = (props: Props) => {
  const [typeMenu, setTypeMenu] = useState<number>(1);

  return (
    <div>
      <div className="flex gap-10 text-xl font-semibold border-b border-gray-300 justify-center">
        <div
          onClick={() => setTypeMenu(1)}
          className={` ${
            typeMenu === 1 ? " border-b border-backgroundColor" : ""
          } duration-200 pb-4`}
        >
          <h4
            className={`${
              typeMenu === 1 ? "active-menu-down relative" : ""
            } duration-200`}
          >
            New Product
          </h4>
        </div>
        <div
          onClick={() => setTypeMenu(2)}
          className={` ${
            typeMenu === 2 ? " border-b border-backgroundColor" : ""
          } duration-200 pb-4`}
        >
          <h4
            className={`${
              typeMenu === 2 ? "active-menu-down relative" : ""
            } duration `}
          >
            Best Seller
          </h4>
        </div>
      </div>
      <div className="flex mt-6">
        <ItemNewBestSeller />
        <ItemNewBestSeller />
        <ItemNewBestSeller />
        <ItemNewBestSeller />
      </div>
    </div>
  );
};

export default NewBestSeller;
