import React from "react";
import classes from "./paper.module.css"

const person = (props) => {

  return (
    <div className={classes.Person}>
      <div onClick={props.click} >
        {props.title} - 
        <b> {props.year}</b>
      </div>
      <div className={classes.text}>{props.desc}</div>
      <p>{props.children}</p>
      {/*<input type="text" onChange={props.changed} value={props.name} />*/}
    </div>
  );
};

export default person;
