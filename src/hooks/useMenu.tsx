import React, { useState, useEffect } from "react";

const useMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const switchMenuVisibility = () =>
    setShowMenu((showMenu: boolean) => !showMenu);

  useEffect(() => {
    showMenu
      ? document.body.classList.add("disabled")
      : document.body.classList.remove("disabled");
  }, [showMenu]);

  return [showMenu, switchMenuVisibility];
};

export default useMenu;
