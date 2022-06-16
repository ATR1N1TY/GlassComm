import React, { useState, useEffect } from "react";

const useDarkTheme = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const html = window.document.documentElement;

    const prevTheme = darkTheme ? "light" : "dark";
    html.classList.remove(prevTheme);

    const nextTheme = darkTheme ? "dark" : "light";
    html.classList.add(nextTheme);
  }, [darkTheme]);

  return [darkTheme, setDarkTheme];
};

export default useDarkTheme;
