import React, { useState, useEffect } from "react";

// made for hamburger menu
// this is the logic of the hamburger menu
// and here we have function that toggles menu on/off

const useMenu = (): [boolean, () => void] => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const switchMenuVisibility = () => setShowMenu((showMenu) => !showMenu);

  useEffect(() => {
    showMenu
      ? document.body.classList.add("disabled")
      : document.body.classList.remove("disabled");
  }, [showMenu]);

  return [showMenu, switchMenuVisibility];
};

export default useMenu;
