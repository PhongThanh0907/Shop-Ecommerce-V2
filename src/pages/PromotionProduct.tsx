import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../app/store";
import CheckoutWizard from "../components/CheckoutWizard";
import ItemNewBestSeller from "../components/ItemNewBestSeller";
import SlideItem from "../components/SlideItem";

type Props = {
  state: number;
};

const PromotionProduct = (state: Props) => {
  const { data: products } = useSelector((state: RootState) => state.products);

  return (
    <div className="">
      <CheckoutWizard
        activeStep={1}
        state={state.state === 1 ? "Promotion" : "BestSeller"}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-20 py-10 relative">
        <div className="border-2 border-backgroundColor px-10 py-10 rounded-3xl h-[550px]">
          {state.state === 1 ? (
            <>
              <SlideItem
                listProduct={products.slice(10, 16).map((item) => (
                  <ItemNewBestSeller
                    key={item._id}
                    oldPrice={item.oldPrice}
                    item={item}
                  />
                ))}
              />
            </>
          ) : (
            <>
              <SlideItem
                listProduct={products.slice(18, 24).map((item) => (
                  <ItemNewBestSeller
                    key={item._id}
                    oldPrice={item.oldPrice}
                    item={item}
                  />
                ))}
              />
            </>
          )}
        </div>
        <div className="absolute top-5 left-12 right-12 lg:left-96 lg:right-96 bg-backgroundColor px-5 py-2 text-center rounded-lg">
          <h4 className="text-sm lg:text-lg text-white font-semibold">
            {state.state === 1
              ? "Pre-Order Leopold - HOT GIFTS NOW"
              : "Best Seller Products"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PromotionProduct;
