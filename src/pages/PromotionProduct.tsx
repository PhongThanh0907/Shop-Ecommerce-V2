import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import ItemNewBestSeller from "../components/ItemNewBestSeller";
import SlideItem from "../components/SlideItem";

type Props = {};

const PromotionProduct = (props: Props) => {
  return (
    <div className="">
      <CheckoutWizard activeStep={1} />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10 relative">
        <div className="border-2 border-backgroundColor px-8 py-10 rounded-3xl">
          <SlideItem
            listProduct={[
              <ItemNewBestSeller />,
              <ItemNewBestSeller />,
              <ItemNewBestSeller />,
              <ItemNewBestSeller />,
            ]}
          />
        </div>
        <div className="absolute top-5 left-12 right-12 lg:left-96 lg:right-96 bg-backgroundColor px-5 py-2 text-center rounded-lg">
          <h4 className="text-sm lg:text-lg text-white font-semibold">
            Pre-Order Leopold - HOT GIFTS NOW
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PromotionProduct;
