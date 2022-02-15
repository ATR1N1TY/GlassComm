import React from "react";
import Quantity from "../quantity";
import { RiShoppingCartFill } from "react-icons/ri";

const Details = () => {
  return (
    <section className="details glass rounded-3xl p-8 w-1/3">
      <h4 className="companyName uppercase font-bold text-xl text-orange-500 mb-2">
        Sneaker Company
      </h4>

      <h1 className="title font-bold text-6xl text-gray-800">
        Fall Limited Edition Sneakers
      </h1>

      <p className="description text-lg my-8">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="price">
        <div className="currentPrice inline-flex flex-row text-3xl font-bold">
          <h3>$125.00</h3>
          <h3 className="discount block mx-6 px-2 bg-orange-100 rounded-sm text-orange-500">
            50%
          </h3>
        </div>
        <del className="oldPrice block text-slate-600 font-bold mt-2 mb-8">
          $250.00
        </del>
      </div>

      <footer className="options flex">
        <Quantity />
        <button className="btn mx-8 px-16 rounded-xl text-amber-50 font-bold bg-orange-500 drop-shadow-md">
          <RiShoppingCartFill className="inline font-bold" /> Add to cart
        </button>
      </footer>
    </section>
  );
};

export default Details;
