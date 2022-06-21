import React from "react";

// close menu logo made with tailwind and two divs

const HamburgerCloseLogo = () => {
  return (
    <>
      <div className="stick w-8 h-1 bg-white rounded-2xl rotate-45 absolute"></div>
      <div className="stick w-8 h-1 bg-white rounded-2xl -rotate-45 absolute"></div>
    </>
  );
};

export default HamburgerCloseLogo;
