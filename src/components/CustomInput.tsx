import React, { useState, useEffect } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

import { UpdateNumberCount } from "../app/features/cart/cartReducer";
import { AppDispatch } from "../app/store";
import { Item } from "../types/Item";

const CustomInput = ({
  quantity,
  item,
}: {
  quantity: (count: number) => void;
  item: Item;
}) => {
  const [numberCount, setNumberCount] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (numberCount) {
      quantity(numberCount);
    } else {
      quantity(1);
    }
  }, [numberCount, item.numberCount]);

  useEffect(() => {
    dispatch(UpdateNumberCount({ ...item, numberCount }));
  }, [numberCount]);

  useEffect(() => {
    setNumberCount(item.numberCount);
  }, []);

  return (
    <div className="flex justify-between border border-gray-200 rounded-3xl px-1 pl-4 h-[35px] py-1 w-[60%]">
      <div>
        <p>{item.numberCount}</p>
      </div>
      <div className="flex gap-1">
        <div
          onClick={() => {
            setNumberCount(numberCount + 1);
          }}
          className="bg-gray-100 rounded-full p-[4px] px-[6px] flex justify-center items-center cursor-pointer"
        >
          <PlusIcon className="h-3 w-3" />
        </div>
        <div
          onClick={() => {
            if (numberCount && numberCount > 1) {
              setNumberCount(numberCount - 1);
            }
          }}
          className={`${
            numberCount === 1 ? "bg-gray-300" : "bg-gray-100 cursor-pointer"
          }  rounded-full p-[4px] px-[7px] flex justify-center items-center duration-300`}
        >
          <MinusIcon className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
