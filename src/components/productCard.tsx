import React, { useContext, useEffect } from "react";
// import logo from "../public/LOGO.jpg";
import testImg from "../public/testImage.jpg";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineRemove } from "react-icons/md";
import { CART_ACTIONS } from "../context/actions";
import { IProduct, GlobalAction } from "../types/types";
import RatingComponent from "./ratingComponent";
import { FiPackage } from "react-icons/fi";
import Link from "next/link";
import logo from "../../public/LOGO.jpg";
import { globalContext } from "../context/context";

const ProductCard = (props: {
  product: IProduct;
  cart: IProduct[];
  dispatch: React.Dispatch<GlobalAction>;
}) => {
  const { product, cart, dispatch } = props;

  const imageLoader = () => {
    return product.images[0];
  };

  const { currencyData } = useContext(globalContext);

  return (
    <article className="productCard animate-swipeDownAndGrow relative glass  w-72 h-96  rounded-2xl overflow-hidden dark:bg-stone-800/50 dark:text-slate-300 dark:hover:bg-stone-700/50 hover:bg-white/50 transition-all">
      <Link href={`/product/${product.id}`} passHref>
        <div className="imgWrap absolute -left-16 -top-24 rounded-xl cursor-pointer">
          <Image
            loader={imageLoader}
            src={logo}
            className=" rounded-full"
            width={"350px"}
            height={"350px"}
            alt={product.name}
          />
        </div>
      </Link>
      <footer className="productDetails absolute bottom-0 w-full p-4 cursor-pointer">
        <Link href={`/product/${product.id}`} passHref>
          <div className="linkWrapper">
            <section className="productName m-2 font-bold text-xl">
              {product.name}
            </section>
            <section className="productPrice mx-2 font-bold">
              {product.price} {currencyData.to}
            </section>
            <section className="options flex justify-between">
              <RatingComponent productRating={product.ratings} />
              {product.fastDelivery ? (
                <div className="fastDeliveryLogo flex">
                  <FiPackage className=" align-baseline" />
                </div>
              ) : (
                ""
              )}
            </section>
          </div>
        </Link>
      </footer>

      {cart.some((prod: IProduct) => prod.id === product.id) ? (
        <div
          className=" z-10 cartOptions absolute text-3xl font-bold bottom-28   right-3 bg-white w-20 h-20 rounded-full flex justify-center items-center transition-colors dark:bg-neutral-600 dark:text-slate-200 hover:bg-red-600 dark:hover:bg-red-600 cursor-pointer "
          onClick={() =>
            dispatch({ type: CART_ACTIONS.REMOVE_PRODUCT, payload: product })
          }
        >
          <MdOutlineRemove />
        </div>
      ) : (
        <div
          className=" z-10 cartOptions absolute text-3xl font-bold bottom-28   right-3 bg-white w-20 h-20  rounded-full flex justify-center items-center transition-colors dark:bg-neutral-600 dark:text-slate-200 hover:bg-green-500 dark:hover:bg-green-500 cursor-pointer"
          onClick={() =>
            dispatch({ type: CART_ACTIONS.ADD_PRODUCT, payload: product })
          }
        >
          <RiShoppingCartLine />
        </div>
      )}
    </article>
  );
};

export default ProductCard;
