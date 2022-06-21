import React, { useContext } from "react";
import { globalContext } from "../../context/context";

// simple hamburger menu logo made with only tailwind and some divs

const HamburgerMenuLogo = () => {
  const { switchMenuVisibility } = useContext(globalContext);

  return (
    <div className="flex flex-col sm:hidden" onClick={switchMenuVisibility}>
      <div className="burger w-6 h-1 bg-white rounded-2xl mb-1"></div>
      <div className="burger w-6 h-1 bg-white rounded-2xl mb-1"></div>
      <div className="burger w-6 h-1 bg-white rounded-2xl mb-1"></div>
    </div>
  );
};

export default HamburgerMenuLogo;
