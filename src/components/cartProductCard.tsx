import React, { useContext } from "react";
import Image from "next/image";
import image from "../../public/imagesForTesting/image.jpg";
import Quantity from "./quantity";
import { RiCloseFill } from "react-icons/ri";
import { CART_ACTIONS } from "../context/actions";
import Link from "next/link";
import { globalContext } from "../context/context";
import { IProduct, GlobalAction } from "../types/types";

// as the component name describes, this is a component for a cart
// this is a product card for a cart page
// here we are displaying product data and using Quantity component by which user can change the quantity
// of the product

const CartProductCard = (props: {
  product: IProduct;
  dispatch: React.Dispatch<GlobalAction>;
}) => {
  const { product, dispatch } = props;

  const {
    currencyData: { to },
  } = useContext(globalContext);

  const renderImage = (): string => product.images[0];

  console.log(product.quantity);

  return (
    <section className="cartProductCard glass animate-swipeDownAndGrow rounded-xl flex items-center justify-between border-4 p-4 my-2 md:w-4/5 dark:bg-stone-800/50 dark:text-slate-300">
      <div className="img w-16 h-16 md:w-24 md:h-24">
        <Link href={`/product/${product.id}`} passHref>
          <Image
            src={image}
            loader={renderImage}
            alt={product.name}
            className="w-full h-full rounded-md md:rounded-xl hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className="info">
        <Link href={`/product/${product.id}`} passHref>
          <p className="title font-bold mx-2 lg:mx-0 text-sm md:text-xl hover:cursor-pointer">
            {product.name}
          </p>
        </Link>
        <p className="id hidden md:block">#{product.id}</p>
      </div>
      <p className="price font-bold hidden md:block">
        {to} {product.price}
      </p>
      <Quantity
        qty={product.quantity}
        maxQty={product.inStock}
        identifier={product.id}
      />
      <div className="totalPrice font-bold ml-4 lg:ml-0">
        {to} {Number(product.price) * product.quantity}
      </div>
      <button
        className="removeItem text-3xl"
        onClick={() =>
          dispatch({ type: CART_ACTIONS.REMOVE_PRODUCT, payload: product })
        }
      >
        <RiCloseFill />
      </button>
    </section>
  );
};

export default CartProductCard;
