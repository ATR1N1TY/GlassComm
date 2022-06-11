import React from "react";
import { globalContext } from "../../context/context";
import { useContext } from "react";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { RiUser6Line } from "react-icons/ri";

import Exchange from "../exchange";

const NavbarRightList = (props: { useForNavbar: boolean }) => {
  const { useForNavbar } = props;

  const {
    globalState: { cart },
    darkTheme,
    setDarkTheme,
    switchMenuVisibility,
  } = useContext(globalContext);

  return (
    <nav
      className={`links text-2xl ${
        useForNavbar
          ? "hidden"
          : "text-6xl flex dark:text-slate-50 justify-evenly mt-10 "
      } sm:flex`}
    >
      <span
        className="cart-status mr-4 cursor-pointer hover:text-white"
        onClick={() => {
          if (!useForNavbar) {
            switchMenuVisibility();
          }
        }}
      >
        <Link href="/cart" passHref>
          <div className="wrapper relative">
            {!cart.length ? <RiShoppingCartLine /> : <RiShoppingCartFill />}
            <div className="counter absolute top-3 right-3 bg-green-500 text-black  rounded-full w-4 h-4 flex items-center justify-center font-bold text-sm ">
              {cart.length}
            </div>
          </div>
        </Link>
      </span>

      <span
        className={`exchange flex text-2xl ${
          useForNavbar ? "text-2xl" : "text-6xl"
        } mr-4 cursor-pointer hover:text-white`}
      >
        <Exchange />
      </span>

      <span
        className={`exchange flex ${
          useForNavbar ? "text-2xl" : "text-6xl"
        } mr-4 hover:cursor-pointer hover:text-white`}
        onClick={() => setDarkTheme((darkTheme: boolean) => !darkTheme)}
      >
        {!darkTheme ? <RiMoonClearFill /> : <BsSun />}
      </span>

      <span
        className="signIn-status hover:text-white"
        onClick={() => {
          if (!useForNavbar) {
            switchMenuVisibility();
          }
        }}
      >
        <Link href="/signIn" passHref>
          <>
            <RiUser6Line />
          </>
        </Link>
      </span>
    </nav>
  );
};

export default NavbarRightList;
