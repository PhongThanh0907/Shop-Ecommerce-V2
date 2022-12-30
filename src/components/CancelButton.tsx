import React from "react";

type Props = {};

const CancelButton = (props: Props) => {
  return (
    <div className="border-2 border-red-500 rounded-full w-6 h-6 flex cursor-pointer justify-center items-center">
      <span className="text-sm mb-[4px] text-red-500 font-bold">x</span>
    </div>
  );
};

export default CancelButton;
