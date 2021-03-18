import React from "react";
import classes from "./post.module.css";
const post = (props) => {
  if (props.image !== null) {
    return (
      <div className={classes.Post}>
        <img className={classes.img} src={props.image}></img>
        <div className={classes.text}>
          <div className={classes.heading}>{props.title}</div>
          <p className={classes.text}>{props.dess}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.Post}>
      <div className={classes.text}>
        <div className={classes.heading}>{props.title}</div>
        <p className={classes.text}>{props.dess}</p>
      </div>
    </div>
  );
};

export default post;

// Finite Autometa Example
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
//           imperdiet, nulla et dictum interdum
