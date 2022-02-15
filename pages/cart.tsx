import React from "react";
import CartProductCard from "../components/cartProductCard";
import Logo from "../components/logo";
import Navbar from "../components/navbar";
import Image from "next/image";
import atrinityLogo from "../public/LOGO.jpg";

const cart = () => {
  return (
    <div className="cartPage bg-gradient-to-tr w-screen h-screen from-red-300 to-red-700 h-screen">
      <Navbar />
      <section className="cartProductList">
        <div className="titles">
          <ul className="flex ">
            <li>PRODUCT</li>
            <li>PRICE</li>
            <li>QTY</li>
            <li>TOTAL</li>
          </ul>
        </div>
        <div className="productContainer overflow-auto h-96 p-8 mt-4 w-full flex flex-col items-center justify-center">
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        </div>
      </section>
      <footer className="checkout rounded-t-3xl checkoutBg text-yellow-900  fixed bottom-0 left-0 w-screen p-8 h-1/4 flex items-center justify-around">
        <div className="credit hover:animate-pulse font-bold mx-4 text-3xl relative">
          <Logo />
          <p>
            Made with 💖 By <a href="https://github.com/atr1n1ty">ATR!N!TY</a>{" "}
          </p>
          <div className="absolute spinner -top-2 left-2/3 ">
            <Image
              src={atrinityLogo}
              width={"50px"}
              height={"50px"}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="total border-4 border-orange-900 rounded-lg p-4 w-1/4">
          <p className="tot font-bold text-2xl mb-4">SUBTOTAL $49.99</p>
          <form action="check ">
            <input type="checkbox" name="box" />
            <label htmlFor="box ">
              {" "}
              I agree to
              <span className=" text-slate-900 font-bold ">
                {" "}
                Terms & Conditions
              </span>
            </label>
          </form>
          <button className="checkout bg-neutral-800 text-white px-8 py-4 mt-4 font-bold">
            CHECKOUT
          </button>
          <button className="paypal bg-blue-50 text-slate-700 px-8 py-4 mt-4 font-bold ml-4">
            PayPal
          </button>
        </div>
      </footer>
    </div>
  );
};

export default cart;
