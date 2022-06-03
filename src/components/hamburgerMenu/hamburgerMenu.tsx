import React, { useContext } from "react";
import { globalContext } from "../../context/context";
import NavbarLeftList from "../navbar/navbarLeftList";
import NavbarRightList from "../navbar/navbarRightList";

const HamburgerMenu = () => {
  const { showMenu, setShowMenu } = useContext(globalContext);

  return (
    <div
      className={`menu p-8  top-0 left-0 right-0  h-screen  ${
        showMenu ? "absolute" : "hidden"
      } z-10 `}
    >
      <div
        className="close button"
        onClick={() => setShowMenu((showMenu: boolean) => !showMenu)}
      >
        <div className="stick w-8 h-1 bg-white rounded-2xl rotate-45 absolute"></div>
        <div className="stick w-8 h-1 bg-white rounded-2xl -rotate-45 absolute"></div>
      </div>
      <div className="nav flex flex-col justify-around ">
        <NavbarLeftList useForNavbar={false} />
        <NavbarRightList useForNavbar={false} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
