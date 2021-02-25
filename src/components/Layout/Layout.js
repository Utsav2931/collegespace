import React, { Component } from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/AAux";
import NavBar from '../Navigation/Navbar';


class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavBar/>
        <main className={classes.Content}>{this.props.children}</main>{" "}
      </Aux>
    );
  }
}

export default Layout;
