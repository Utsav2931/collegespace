import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../components/UI/DarkMode/ThemeContext";

// Website starts from here
const App = function App() {

  return (
    // console.log(theme),
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Layout />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
