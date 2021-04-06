import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import ContentBuilder from "./ContentBuilder/ContentBuilder";
import { BrowserRouter } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout/>
            {/* <ContentBuilder />
        </Layout> */}
      </BrowserRouter>
    );
  }
}

export default App;
