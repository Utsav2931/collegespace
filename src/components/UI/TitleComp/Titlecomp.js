import React from "react";
import classes from "./Titlecomp.module.css";

// Title component to display similar title universally
const Titlecomp = (props) => {
  return <p className={classes.Titlecomp}>{props.title}</p>;
};

export default Titlecomp;
