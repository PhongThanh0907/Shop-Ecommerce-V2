import React from "react";
import NotFoundImg from "../assets/notfound.jpg";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto py-10 object-cover">
      <img className="w-full h-full" src={NotFoundImg} alt="notfound" />
    </div>
  );
};

export default NotFound;
