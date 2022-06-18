import React, { useContext } from "react";
import { globalContext } from "../../context/context";
import Link from "next/link";

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
        <li>About</li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLeftList;
