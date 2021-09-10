import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { useDarkMode } from "../components/UI/DarkMode/userDarkMode";
import { lightTheme, darkTheme } from "../components/UI/DarkMode/theme";
import { GlobalStyles } from "../components/UI/DarkMode/global";
import Toggle from "../components/UI/DarkMode/Toggle.js";
import { ThemeProvider } from "styled-components";


// Website starts from here
const App = React.memo(function App() {
  // const [darkMode, toggleTheme] = React.useState(false);
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  // React.useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  //   const json = JSON.stringify(darkMode);
  //   localStorage.setItem("site-dark-mode", json);
  // }, [darkMode]);
  if (!componentMounted) {
    return <div />
  };

  const themeMode = theme === 'light' ? lightTheme : darkTheme;



  return (
        // console.log(theme),
        <ThemeProvider theme={themeMode}>
          <>
          <BrowserRouter>
          <GlobalStyles />
          <Layout theme={theme} toggleTheme={toggleTheme}/>
        </BrowserRouter>
          </>
        </ThemeProvider>
        

  );
});

export default App;
