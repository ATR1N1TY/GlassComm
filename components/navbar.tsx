import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { RiUser6Line } from "react-icons/ri";
import mainLogo from "../public/LOGO.jpg";

const Navbar = () => {
  return (
    <header className="navbar glass p-6 flex align-middle justify-between relative w-screen mb-8">
      <div className="lists">
        <ul className="flex">
          <li>Trending</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="name text-3xl absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 hover:animate-pulse">
        <div className="logo w-full h-2 flex ">
          <div className="orange w-1/2 h-full bg-amber-900 "></div>
          <div className="blue w-1/2 h-full bg-yellow-200 "></div>
        </div>
        GlassComm
      </div>
      <div className="links flex text-2xl">
        <div className="cart-status mr-4">
          <RiShoppingCartLine />
        </div>
        <div className="exchange flex text-2xl mr-4">
          <RiExchangeDollarLine />
        </div>
        <div className="signIn-status">
          <RiUser6Line />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
