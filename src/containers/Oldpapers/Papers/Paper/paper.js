import React from "react";
import classes from "./paper.module.css"

const person = (props) => {

  return (
    <div className={classes.Person}>
      <div onClick={props.click} >
        {props.name}
        <b>{props.age}</b>
      </div>
      <div className={classes.text}>Toc Previous year's paper</div>
      <p>{props.children}</p>
      {/*<input type="text" onChange={props.changed} value={props.name} />*/}
    </div>
  );
};

export default person;
