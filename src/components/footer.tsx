import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "./logo";
import atrinityLogo from "../../public/LOGO.jpg";
import { CurrencyData, IProduct } from "../types/types";

const Footer = (props: {
  darkTheme: boolean;
  cart: IProduct[];
  currencyData: CurrencyData;
}) => {
  const { darkTheme, cart, currencyData } = props;

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(
      (totalPrice) =>
        (totalPrice = cart.reduce(
          (acc: number, curr: IProduct) =>
            acc + Number(curr.price) * curr.quantity,
          0
        ))
    );
  }, [cart, currencyData]);

  return (
    <footer
      className={`checkout rounded-3xl ${
        !darkTheme ? "bg-footerPatternLight" : "bg-footerPatternDark"
      } bg-fixed bg-cover text-yellow-900 dark:text-slate-200 p-8 lg:m-4 lg:h-96 flex items-center justify-around flex-col md:flex-row`}
    >
      <div className="credit  hover:animate-pulse font-bold my-8 lg:mx-4 text-xl md:text-3xl relative">
        <Logo />
        <p>
          Made with 💖 By <a href="https://github.com/atr1n1ty">ATR!N!TY</a>{" "}
        </p>
        <div className="alogo w-12 h-12 absolute animate-customSpin hover:animate-customFastSpin -top-2 left-2/3 ">
          <Image
            src={atrinityLogo}
            width={48}
            height={48}
            className="rounded-full"
            alt="r"
          />
        </div>
      </div>
      <div className="total border-4 border-orange-900 dark:border-pink-100 rounded-lg p-4">
        <p className="tot font-bold text-2xl mb-4">
          SUBTOTAL {currencyData.to} {totalPrice} - ({cart.length}) Unique items
        </p>
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
  );
};

export default Footer;
