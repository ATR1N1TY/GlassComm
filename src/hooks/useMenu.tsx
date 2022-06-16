import React, { useState, useEffect } from "react";

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
