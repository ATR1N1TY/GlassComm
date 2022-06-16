import { useState, useEffect } from "react";

export const useScreenWidth = (): number => {
  // const screen = window.innerWidth;
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
