import React from "react";
import Image from "next/image";
import image from "../public/imagesForTesting/image.jpg";
import Quantity from "./quantity";
import { RiCloseFill } from "react-icons/ri";
import { product } from "../context/context";
import { CART_ACTIONS } from "../context/actions";
import Link from "next/link";

const CartProductCard = ({ product, dispatch }: any) => {
  // console.log(product.quantity);

  return (
    <section className="cartProductCard glass rounded-xl flex items-center justify-between border-4 p-4 my-2 w-4/5 ">
      <div className="img">
        <img
          src={product.images[0]}
          alt={product.name}
          className=" w-24 h-24 rounded-xl "
        />
      </div>
      <div className="info">
        <Link href={`/product/${product.id}`} passHref>
          <p className="title font-bold text-xl hover:cursor-pointer">
            {product.name}
          </p>
        </Link>
        <p className="id">#{product.id}</p>
      </div>
      <p className="price font-bold">${product.price}</p>
      <Quantity
        qty={product.quantity}
        maxQty={product.inStock}
        identifier={product.id}
      />
      <div className="totalPrice font-bold">
        ${product.price * product.quantity}
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
