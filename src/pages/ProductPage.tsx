import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import { RootState } from "../app/store";
import CheckoutWizard from "../components/CheckoutWizard";
import FeaturedProducts from "../components/FeaturedProducts";
import ItemNewBestSeller from "../components/ItemNewBestSeller";
import ItemProduct from "../components/ItemProduct";

type Props = {
  state: string;
};

const ProductPage = (state: Props) => {
  const { data: products } = useSelector((state: RootState) => state.products);
  const [modalMenu, setModalMenu] = useState<boolean>(true);
  const [changeGrid, setChangeGrid] = useState<boolean>(false);
  const [price, setPrice] = useState<string>("5000000");
  // const handleInput = (e) => {
  //   setPrice(e.target.value);
  // };
  const newArr: [string | undefined] = [""];

  const withoutDuplicate = products
    .filter((item) => item.type === state.state)
    .filter((e) => {
      const isD = newArr.includes(e.brand);
      if (!isD) {
        newArr.push(e.brand);
        return true;
      }
      return false;
    });

  return (
    <div>
      <CheckoutWizard activeStep={1} state={state.state} />
      <div className="grid grid-cols-4 max-w-7xl px-10 py-10 lg:py-4 mx-auto gap-10">
        <div className="col-span-1">
          <div className="border border-gray-300 py-3 px-6 rounded-md">
            <div
              onClick={() => setModalMenu(!modalMenu)}
              className="flex items-center gap-1 py-3 cursor-pointer"
            >
              {modalMenu ? (
                <ChevronUpIcon className="h-3 w-3 mt-1 duration-200" />
              ) : (
                <ChevronRightIcon className="h-3 w-3 mt-1 duration-200" />
              )}
              <h1 className="uppercase text-md">{state.state}</h1>
            </div>
            {modalMenu ? (
              <div className="flex flex-col opacity-100 duration-300 h-auto">
                {withoutDuplicate.map((item, index) => (
                  <span
                    key={index}
                    className={`text-md text-gray-600 ${
                      index < withoutDuplicate.length - 1
                        ? "border-b border-gray-200 "
                        : ""
                    } pl-8 py-2`}
                  >
                    {item.brand} (
                    <span className="text-xs text-gray-500">
                      {
                        products
                          .filter((e) => e.type === state.state)
                          .filter((i) => i.brand === item.brand).length
                      }
                    </span>
                    )
                  </span>
                ))}
              </div>
            ) : (
              <div className="opacity-0 duration-500 h-0 w-full"></div>
            )}
          </div>
          <div className="py-10">
            <h4 className="text-lg pb-2 border-b-2 border-backgroundColor">
              Filter By Price
            </h4>
            <input
              className="w-full mt-6"
              min={1000000}
              max={100000000}
              step={200000}
              type="range"
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="flex justify-between">
              <p>1.000.000đ</p>
              <p>10.000.000đ</p>
            </div>
            <p className="text-sm font-bold text-gray-400 mt-2">
              Price: {parseInt(price).toLocaleString("vi-VN")}đ
            </p>
          </div>
          <FeaturedProducts />
        </div>
        <div className="col-span-3">
          <h1 className="uppercase text-xl mb-6">{state.state}</h1>
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-100">
            <div className="flex ml-2 gap-6">
              <BarsArrowUpIcon
                onClick={() => setChangeGrid(false)}
                className={`${
                  changeGrid === false ? "opacity-100" : "opacity-40"
                } h-6 w-6 cursor-pointer duration-300 hover:opacity-100`}
              />
              <BarsArrowDownIcon
                onClick={() => setChangeGrid(true)}
                className={`${
                  changeGrid ? "opacity-100" : "opacity-40"
                } h-6 w-6 hover:opacity-100 duration-300 cursor-pointer`}
              />
            </div>

            <div className="">
              <select
                id="filter"
                className="border border-backgroundColor rounded-xl py-1 px-2 focus:outline-none focus:shadow-outline text-gray-400 mr-8 sm:mr-2"
                // onChange={(e) => setTypePrice(e.target.value)}
              >
                <option className="w-[100px]" value="1">
                  Sort By
                </option>
                <option value="0">Default</option>
                <option value="1">Price: Low to high</option>
                <option value="-1">Price: High to Low</option>
              </select>
            </div>
          </div>
          {changeGrid === false ? (
            <div className="grid grid-cols-4 gap-2 gap-y-2 ">
              {products
                .filter((e) => e.type === state.state)
                .map((item) => (
                  <ItemNewBestSeller key={item._id} item={item} />
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2 gap-y-2 ">
              {products
                .filter((e) => e.type === state.state)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      index <
                      products.filter((e) => e.type === state.state).length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <ItemProduct item={item} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
