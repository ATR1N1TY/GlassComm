import React from "react";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { RiMoonClearFill } from "react-icons/ri";
import { RiUser6Line } from "react-icons/ri";
import mainLogo from "../public/LOGO.jpg";
import Logo from "./logo";

const Navbar = () => {
  return (
    <header className="navbar fixed glass p-6 flex align-middle justify-between relative w-screen ">
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
      <div className="links flex text-2xl">
        <div className="cart-status mr-4 cursor-pointer">
          <Link href="/cart" passHref>
            <RiShoppingCartLine />
          </Link>
        </div>
        <div className="exchange flex text-2xl mr-4">
          <RiExchangeDollarLine />
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

export default Navbar;
