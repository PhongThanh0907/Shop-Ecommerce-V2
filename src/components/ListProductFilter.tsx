import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../types/product.type";
import ItemNewBestSeller from "./ItemNewBestSeller";
import ItemProduct from "./ItemProduct";

interface Props {
  type?: string | "";
  changeGird?: boolean;
  byBrand?: string;
  price?: string;
  text?: string;
  typeSort?: number | "";
}

const ListProductFilter = ({
  type,
  changeGird,
  typeSort,
  byBrand,
  price,
  text,
}: Props) => {
  const { data: products } = useFetch(
    `products/?searchText=${text ? text : ""}&type=${type ? type : ""}&brand=${
      byBrand ? byBrand : ""
    }&max=${price && price !== "5000000" ? price : ""}&sort=${
      typeSort && typeSort !== 0 ? typeSort : ""
    }`
  );
  return (
    <div>
      {changeGird === false ? (
        <div className="grid grid-cols-4 gap-2 gap-y-2 ">
          {products.map((item: Product) => (
            <ItemNewBestSeller key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 gap-y-2 ">
          {products.map((item: Product) => (
            <ItemProduct key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListProductFilter;
