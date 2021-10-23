import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const localData = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localData? JSON.parse(localData) : []);

  const toggleTheme = () => {
    console.log("toggleTheme");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
