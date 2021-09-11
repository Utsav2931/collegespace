import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

// Website starts from here
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    );
  }
}

export default App;
