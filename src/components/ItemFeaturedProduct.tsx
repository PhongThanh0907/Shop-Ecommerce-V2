import React from "react";

type Props = {};

const ItemFeaturedProduct = (props: Props) => {
  return (
    <div className="flex gap-4">
      <img
        className="w-[30%]"
        src="https://gearshop.vn/upload/resizer.php?src=https://gearshop.vn/upload/images/Product/Razer/Chu%E1%BB%99t/Razer%20Basilisk%20Ultimate/chuot-razer-basilisk-ultimate-ban-khong-dock-sac6982b6fb4d0-(2).jpg&w=300&h=300&q=72&zc=2"
        alt=""
      />
      <div>
        <h1 className="font-semibold">Chuột Razer Basilisk Ultimate</h1>
        <p className="line-through text-gray-400 text-xs font-semibold">
          3,990,000
        </p>
        <p className="text-red-500 text-lg font-bold">3,950,000</p>
      </div>
    </div>
  );
};

export default ItemFeaturedProduct;
