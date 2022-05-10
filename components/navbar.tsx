import React, { useContext, useEffect } from "react";
import { globalContext } from "../context/context";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { RiMoonClearFill } from "react-icons/ri";
import { RiUser6Line } from "react-icons/ri";
import mainLogo from "../public/LOGO.jpg";
import Logo from "./logo";
import Exchange from "./exchange";

const Navbar = () => {
  const {
    globalState: { cart },
    setCurrency,
  } = useContext(globalContext);

  return (
    <header className="navbar  glass p-6 flex align-middle justify-between relative ">
      <div className="lists">
        <ul className="flex">
          <li>Trending</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <Link href="/" passHref>
        <div className="logoWrap hover:animate-pulse absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <Logo href="/" onClick={() => {}} />
        </div>
      </Link>
      <div className="links flex  text-2xl">
        <div className="cart-status mr-4 cursor-pointer">
          <Link href="/cart" passHref>
            <div className="wrapper relative">
              {!cart.length ? <RiShoppingCartLine /> : <RiShoppingCartFill />}
              <div className="counter absolute top-3 right-3 bg-green-500 text-black  rounded-full w-4 h-4 flex items-center justify-center font-bold text-sm ">
                {cart.length}
              </div>
            </div>
          </Link>
        </div>
        <div className="exchange flex text-2xl mr-4">
          <Exchange />
        </div>
        <div className="exchange flex text-2xl mr-4">
          <RiMoonClearFill />
        </div>
        <div className="signIn-status">
          <RiUser6Line />
        </div>
      </div>
    </header>
  );
};

// ესეიგი, როდესაც მომხმარებელი დააჭერს ვალუტის ღილაკს უნდა ჩამოიშალოს dropdown მენიუ
// და უნდა ეწეროს ჩამონათვალი სხვადასხვა ქვეყნის ვალუტების
// როდესაც რომელიმე ვალუტას დააჭერს მომხმარებელი product.price უნდა შეიცვალოს და აგრეთვე currencySign

// მიზანი: product ლისტში price-ის შეცვლა
// product.map((product) => product.price = product.price * usdTOcurr)

//usdTOcurr = rates.

const currData = {
  AUD: 1.566015,
  CAD: 1.560132,
  CHF: 1.154727,
  CNY: 7.827874,
  GBP: 0.882047,
  JPY: 132.360679,
  USD: 1.23396,
};

export default Navbar;
