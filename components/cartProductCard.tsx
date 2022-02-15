import React from "react";
import Image from "next/image";
import image from "../public/imagesForTesting/image.jpg";
import Quantity from "./quantity";
import { RiCloseFill } from "react-icons/ri";

const CartProductCard = () => {
  return (
    <section className="cartProductCard glass rounded-xl flex items-center justify-between border-4 p-4 my-2 w-4/5">
      <div className="img">
        <Image
          className="productImg rounded-xl"
          src={image}
          width={"100px"}
          height={"100px"}
        />
      </div>
      <div className="info">
        <p className="title font-bold text-xl">Converse Sneakers</p>
        <p className="id">#00234</p>
      </div>
      <p className="price font-bold">$49.99</p>
      <Quantity />
      <div className="totalPrice font-bold">$49.99</div>
      <button className="removeItem text-3xl">
        <RiCloseFill />
      </button>
    </section>
  );
};

export default CartProductCard;
