import React, { useState, useEffect } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
type Props = {};

const CustomInput = ({ quantity }: { quantity: (count: number) => void }) => {
  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    quantity(count);
  }, [count]);

  return (
    <div className="flex justify-between border border-gray-200 rounded-3xl px-1 pl-4 h-[35px] py-1 w-[60%]">
      <div>
        <p>{count}</p>
      </div>
      <div className="flex gap-1">
        <div
          onClick={() => setCount(count + 1)}
          className="bg-gray-100 rounded-full p-[4px] px-[6px] flex justify-center items-center cursor-pointer"
        >
          <PlusIcon className="h-3 w-3" />
        </div>
        <div
          onClick={() => {
            if (count > 1) {
              setCount(count - 1);
            }
          }}
          className={`${
            count === 1 ? "bg-gray-300" : "bg-gray-100 cursor-pointer"
          }  rounded-full p-[4px] px-[7px] flex justify-center items-center duration-300`}
        >
          <MinusIcon className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
