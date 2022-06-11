import React, { useContext } from "react";
import { globalContext } from "../../context/context";
import Link from "next/link";
import Logo from "../logo";
import { FaFilter } from "react-icons/fa";
import NavbarLeftList from "./navbarLeftList";
import NavbarRightList from "./navbarRightList";
import HamburgerMenuLogo from "../hamburgerMenu/hamburgerMenuLogo";

const Navbar = () => {
  const { setFilterOn } = useContext(globalContext);

  return (
    <header className="navbar glass p-6 flex align-middle justify-between relative  dark:bg-gray-900/25  dark:text-stone-300 ">
      {/* navigation */}
      <NavbarLeftList useForNavbar={true} />

      {/* logo */}
      <Link href="/" passHref>
        <div className="logoWrap hover:animate-pulse absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <Logo href="/" onClick={() => {}} />
        </div>
      </Link>

      {/* Haburglabyurer menu for responive designey */}
      <HamburgerMenuLogo />

      <div
        className="filterView text-white lg:hidden"
        onClick={() => setFilterOn((filterOn: boolean) => !filterOn)}
      >
        <FaFilter />
      </div>

      {/* 2nd navigaton */}
      <NavbarRightList useForNavbar={true} />
    </header>
  );
};

export default Navbar;
