import React, { useEffect } from "react";
import logo from "../public/LOGO.jpg";
import testImg from "../public/testImage.jpg";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const ProductCard = () => {
  useEffect(() => {}, []);

  return (
    <div className="productCard relative glass bg-red-200 w-72 h-96 rounded-2xl overflow-hidden cursor-pointer">
      <div className="imgWrap absolute -left-16 -top-24 rounded-xl">
        <Image
          src={testImg}
          className=" rounded-full"
          width={"350px"}
          height={"350px"}
        />
      </div>
      <div className="details absolute bottom-0 w-full p-4">
        <section className="productName m-2 font-bold text-xl">
          Converse Sneakers
        </section>
        <section className="productPrice m-2 font-bold">$500.00</section>
      </div>
      <div className="addToCart absolute text-3xl font-bold bottom-16 right-3 bg-white w-20 h-20 rounded-full flex justify-center items-center transition-colors hover:bg-green-500">
        <RiShoppingCartLine />
      </div>
    </div>
  );
};

export default ProductCard;
