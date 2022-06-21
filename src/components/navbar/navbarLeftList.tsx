import React, { useContext } from "react";
import { globalContext } from "../../context/context";
import Link from "next/link";

// straight-fowrard navigation for Trending, about and Contact pages
//as you know this project uses Next.js so we use Link component from Next.js
//with useForNavbar prop we decide how we should this component
//if its true component will be rendered regularly for navbar
//else we use flex to use this component inside hamburger menu component

const NavbarLeftList = (props: { useForNavbar: boolean }) => {
  const { useForNavbar } = props;
  const { switchMenuVisibility } = useContext(globalContext);

  return (
    <nav
      className={`lists ${useForNavbar ? "hidden" : " mt-8"} sm:block`}
      onClick={() => {
        if (!useForNavbar) {
          switchMenuVisibility();
        }
      }}
    >
      <ul
        className={`listUl animate-swipeDownAndGrow flex ${
          useForNavbar ? "" : "flex-col text-6xl justify-around h-96 "
        } dark:text-slate-50 `}
      >
        <li>Trending</li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLeftList;
