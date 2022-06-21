import { useState, useEffect } from "react";

//with window object we get screen width of the user
// if it changes we update that value
// this hook is made for filter component
// as the screen size shrinks we should hide filter component

export const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState<number>(1080);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};
