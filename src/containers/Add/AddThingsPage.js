import React, { Component } from "react";
import TitleComp from "../../components/UI/TitleComp/Titlecomp";
import classes from "../HomeScreen/Homescreen.module.css";

export class Add extends Component {
  render() {
    return (
      <div>
        <TitleComp title="Add Post Screen" />
        <div className={classes.Homescreen}>
          <h3>Hello There</h3>
        </div>
      </div>
    );
  }
}

export default Add;
