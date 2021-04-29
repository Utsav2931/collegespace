import React from "react";
import classes from "./Backdrop.module.css";

// This componet blur the screen(makes not accessable)
const backdrop = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default backdrop;
