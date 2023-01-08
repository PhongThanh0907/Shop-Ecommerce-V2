import { StarIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CheckoutWizard from "../components/CheckoutWizard";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../types/product.type";
import LoadingButton from "../components/LoadingButton";
import CancelButton from "../components/CancelButton";

type Props = {};

const ProductDetail = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [changeImage, setChangeImage] = useState<string>("");
  const [indexImage, setIndexImage] = useState<number>(0);
  const [modalBuy, setModalBuy] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<string>("1");
  const { data } = useFetch(`products/${productId}`);
  const navigate = useNavigate();
  useEffect(() => {
    if (productId) {
      setProduct(data);
    }
  }, [data, productId]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <CheckoutWizard
        activeStep={2}
        state={product?.brand}
        nameProduct={product?.nameProduct}
      />
      {loading ? (
        <div className="flex justify-center py-10">
          <LoadingButton />
        </div>
      ) : (
        <div className="grid grid-cols-8 gap-8 max-w-7xl px-10 mx-auto my-10">
          <div className="col-span-3">
            {changeImage === "" ? (
              <>
                {product?.imageProduct?.slice(0, 1)?.map((item, index) => (
                  <img key={index} src={item} alt="" />
                ))}
              </>
            ) : (
              <>
                <img src={changeImage} alt="" />
              </>
            )}
            <div className="flex w-[70%] gap-2">
              {product?.imageProduct?.map((item, index) => (
                <div
                  className={`border ${
                    index === indexImage
                      ? "border-b border-b-backgroundColor"
                      : ""
                  } py-3 cursor-pointer duration-300`}
                  key={index}
                >
                  <img
                    onClick={() => {
                      setIndexImage(index);
                      setChangeImage(item);
                    }}
                    src={item}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-3">
            <h1 className="text-sm text-gray-500">{product?.brand}</h1>
            <h1 className="text-2xl font-semibold py-5">
              {product?.nameProduct}
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem beatae itaque voluptatum fuga debitis officiis
              dolores iste recusandae consequatur? Unde ea similique est
              eligendi recusandae consectetur saepe officia! Ipsum delectus
              perferendis neque quia, dicta cupiditate, officiis tenetur itaque
              libero porro minima suscipit amet, recusandae eos cumque. Voluptas
              quas quisquam cum.
            </p>
          </div>
          <div className="col-span-2 relative">
            <div className="flex flex-col justify-center border-2 p-6 border-gray-300 rounded-2xl">
              <h1 className="text-md text-gray-400 border-b border-gray-200 pb-2">
                Status:{" "}
                <span className="text-green-600 font-semibold">Stocking</span>
              </h1>
              <h1 className="text-md text-gray-700 font-semibold my-1 pt-2">
                Product Code: {product?.productCode}
              </h1>
              <p className="text-md text-gray-500">Insurance: 36 months</p>
              <div className="flex gap-1 my-1 mb-2">
                <StarIcon className="text-yellow-400 h-3 w-3" color="" />
                <StarIcon className="text-yellow-400 h-3 w-3" color="" />
                <StarIcon className="text-yellow-400 h-3 w-3" color="" />
                <StarIcon className="text-yellow-400 h-3 w-3" color="" />
                <StarIcon className="text-gray-300 h-3 w-3" color="" />
              </div>
              {product?.oldPrice !== 0 ? (
                <p className="text-sm line-through text-gray-400 pt-3">
                  {product?.oldPrice?.toLocaleString("vi-VN")}đ
                </p>
              ) : (
                <></>
              )}
              <p className="text-2xl text-red-500 font-semibold pb-3">
                {product?.price?.toLocaleString("vi-VN")}đ
              </p>
              <p className="text-sm text-gray-500 ">Quantity:</p>
              <input
                type="number"
                className="focus:outline-none w-[70%] border border-gray-300 rounded-3xl py-2 pl-6 my-2"
                defaultValue={1}
                onChange={(value) => setQuantity(value.target.value)}
              />
              {modalBuy ? (
                <div className="lds-ring my-4 mx-auto">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              ) : (
                <button
                  onClick={() => setModalBuy(!modalBuy)}
                  className="my-4 text-white flex items-center bg-backgroundColor py-3 justify-center gap-2 rounded-3xl font-semibold hover:bg-[#00c0dd] duration-300 active:bg-[#008da3]"
                >
                  <ShoppingCartIcon className="w-6 h-6" /> Buy now{" "}
                </button>
              )}
            </div>
            <p className="font-semibold pt-4">
              Address:{" "}
              <span className="font-normal text-gray-500">
                52 Tran Minh Quyen, District 10, Hồ Chí Minh
              </span>
            </p>
            <p className="font-semibold py-4">
              Time:{" "}
              <span className="font-normal text-gray-500">
                The shop is open from 9h30 to 20h30
              </span>{" "}
            </p>
            <p className="font-semibold">
              Hotline:{" "}
              <span className="text-blue-500">0938458350 - 0979399509</span>
            </p>
            {modalBuy ? (
              <div className="absolute -top-[93px] -left-10 -right-10 bg-white border-2 border-backgroundColor p-8 opacity-100 duration-300">
                <div className="grid grid-cols-5 gap-2 border-b border-gray-200">
                  <div className="col-span-2">
                    {product?.imageProduct.slice(0, 1).map((e) => (
                      <img src={e} alt="logo" />
                    ))}
                  </div>
                  <div className="col-span-3">
                    <h1 className="text-sm text-blue-600 font-semibold mt-2">
                      {product?.nameProduct}
                    </h1>
                    <p className="text-gray-700 mt-2">
                      {quantity} <span>x</span>{" "}
                      {product?.price?.toLocaleString("vi-VN")}đ
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-semibold">
                  Total price:{" "}
                  <span className="text-red-500 font-bold">
                    {" "}
                    {(
                      parseInt(quantity) * (product?.price || 0)
                    ).toLocaleString("vi-VN")}
                    đ
                  </span>
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => navigate("/products/cart")}
                    className="w-[50%] text-center bg-backgroundColor text-white font-bold mt-4 py-2 rounded-3xl"
                  >
                    Order
                  </button>
                </div>
                <div
                  onClick={() => {
                    setModalBuy(false);
                  }}
                  className="absolute top-4 right-4"
                >
                  <CancelButton />
                </div>
              </div>
            ) : (
              <div className="-top-[500px] -left-10 -right-10 duration-300 opacity-0 bg-white"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
