import React from "react";

type Props = {};

const LoadingButton = (props: Props) => {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default LoadingButton;
