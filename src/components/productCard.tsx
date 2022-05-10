import React, { useEffect } from "react";
import logo from "../public/LOGO.jpg";
import testImg from "../public/testImage.jpg";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineRemove } from "react-icons/md";
import { CART_ACTIONS } from "../context/actions";
import { Product } from "../context/context";
import RatingComponent from "./ratingComponent";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import Link from "next/link";

const ProductCard = ({ product, cart, dispatch }: any) => {
  // console.log(product);

  return (
    <div className="productCard relative glass bg-red-200 w-72 h-96 rounded-2xl overflow-hidden cursor-pointer">
      <div className="imgWrap absolute -left-16 -top-24 rounded-xl">
        {/* <Image
          src={product.images[0].toString()}
          className=" rounded-full"
          width={"350px"}
          height={"350px"}
        /> */}
        <Link href={`/product/${product.id}`} passHref>
          <img
            src={product.images[0]}
            alt={product.name}
            className=" w-80 h-80 rounded-full"
          />
        </Link>
      </div>
      <div className="details absolute bottom-0 w-full p-4">
        <section className="productName m-2 font-bold text-xl">
          {product.name}
        </section>
        <section className="productPrice mx-2 font-bold">
          ${product.price}
        </section>
        <section className="options flex justify-between">
          <RatingComponent productRating={product.ratings} />
          {product.fastDelivery ? (
            <div className="fastDeliveryLogo flex">
              {/* <AiTwotoneThunderbolt /> */}
              <FiPackage className=" align-baseline" />
              {/* <p>Fast Delivery</p> */}
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
      <div className="cartOptions absolute text-3xl font-bold bottom-28   right-3 bg-white w-20 h-20 rounded-full flex justify-center items-center transition-colors hover:bg-green-500">
        {/* <RiShoppingCartLine /> */}

        {cart.some((prod: Product) => prod.id === product.id) ? (
          <MdOutlineRemove
            onClick={() =>
              dispatch({ type: CART_ACTIONS.REMOVE_PRODUCT, payload: product })
            }
          />
        ) : (
          <RiShoppingCartLine
            onClick={() =>
              dispatch({ type: CART_ACTIONS.ADD_PRODUCT, payload: product })
            }
          />
        )}
        {/* <MdOutlineRemove /> */}
      </div>
    </div>
  );
};

// თუ მოცემული პროდუქტი ქარტში არ არის დააბრუნე დამატების ღილაკი
// თუ ქარტში ეს პროდუქტი არის დააბრუნე მოშორების ღილაკი

export default ProductCard;
