import React, { useContext } from "react";
import { globalContext } from "../../context/context";

const HamburgerMenuLogo = () => {
  const { showMenu, setShowMenu } = useContext(globalContext);

  return (
    <div
      className="flex flex-col sm:hidden"
      onClick={() => setShowMenu((showMenu: boolean) => !showMenu)}
    >
      <div className="burger w-6 h-1 bg-white rounded-2xl mb-1"></div>
      <div className="burger w-6 h-1 bg-white rounded-2xl mb-1"></div>
      <div className="burger w-6 h-1 bg-white rounded-2xl mb-1"></div>
    </div>
  );
};

export default HamburgerMenuLogo;