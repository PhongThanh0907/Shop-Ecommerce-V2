import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";

import { RootState } from "../app/store";
import CheckoutWizard from "../components/CheckoutWizard";
import FeaturedProducts from "../components/FeaturedProducts";
import useDebounce from "../hooks/useDebounce";
import ListProductFilter from "../components/ListProductFilter";
import { useLocation } from "react-router-dom";

type Props = {
  type?: string;
};

const ProductPage = (type: Props) => {
  const { data: products } = useSelector((state: RootState) => state.products);
  const [modalMenu, setModalMenu] = useState<boolean>(true);
  const [changeGrid, setChangeGrid] = useState<boolean>(false);
  const [price, setPrice] = useState<string>("5000000");
  const [filterByBrand, setFilterByBrand] = useState<string>();
  const [typeSort, setTypeSort] = useState<number>();
  const location = useLocation();

  const debouncedValue = useDebounce<string>(price, 1000);

  // const handleInput = (e) => {
  //   setPrice(e.target.value);
  // };
  const newArr: [string | undefined] = [""];

  const withoutDuplicate = products
    .filter((item) => item.type === type.type)
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
      <CheckoutWizard
        activeStep={1}
        state={`${type.type ? type.type : "Product"}`}
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl lg:px-10 px-5  py-2 lg:py-4 mx-auto lg:gap-10">
        <div className="col-span-1">
          <div
            className={`${
              type.type
                ? "border border-gray-300 lg:py-3 px-6 rounded-md"
                : "hidden"
            } `}
          >
            <div
              onClick={() => setModalMenu(!modalMenu)}
              className="flex items-center gap-1 py-2 lg:py-3 cursor-pointer"
            >
              {modalMenu ? (
                <ChevronUpIcon className="h-3 w-3 mt-1 duration-200" />
              ) : (
                <ChevronRightIcon className="h-3 w-3 mt-1 duration-200" />
              )}
              <h1 className="uppercase text-md">{type.type}</h1>
            </div>
            {modalMenu ? (
              <div className="flex flex-col opacity-100 duration-300 h-auto">
                {withoutDuplicate.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => setFilterByBrand(item.brand)}
                    className={`text-md text-gray-600 ${
                      index < withoutDuplicate.length - 1
                        ? "border-b border-gray-200 "
                        : ""
                    } pl-8 py-2 cursor-pointer`}
                  >
                    {item.brand} (
                    <span className="text-xs text-gray-500">
                      {
                        products
                          .filter((e) => e.type === type.type)
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
          <div className="py-4 lg:py-10">
            <h4 className="text-lg pb-2 border-b-2 border-backgroundColor">
              Filter By Price
            </h4>
            <input
              className="w-full mt-6"
              min={1000000}
              max={10000000}
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
          <div className="hidden lg:inline">
            <FeaturedProducts />
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="uppercase text-xl mb-3 lg:mb-6">
            {type.type ? type.type : "Product"}
          </h1>
          <div className="flex items-center justify-end lg:justify-between p-4 rounded-xl bg-gray-100">
            <div className="hidden lg:flex lg:ml-2 gap-2 lg:gap-6">
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
                className="border border-backgroundColor rounded-xl py-1 px-2 focus:outline-none focus:shadow-outline text-gray-400 lg:mr-8 sm:mr-2"
                onChange={(e: any) => setTypeSort(e.target.value)}
              >
                <option className="w-[100px]" value="1">
                  Sort By
                </option>
                <option value="1">Default</option>
                <option value="1">Price: Low to high</option>
                <option value="-1">Price: High to Low</option>
              </select>
            </div>
          </div>

          <ListProductFilter
            text={location?.state?.valueSearch}
            type={type.type}
            changeGird={changeGrid}
            byBrand={filterByBrand}
            price={debouncedValue}
            typeSort={typeSort}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
