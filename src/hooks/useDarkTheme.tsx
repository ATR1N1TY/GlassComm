import React, { useState, useEffect } from "react";

//this hook takes advantage of tailwind css
//with tailwind we can go to dark mode really fast and that's amazing!
// this hook adds "dark" to the class list of the html tag
// "light" otherwise does nothing, it's just for simplicity

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
