import React from "react";
import classes from './Textfield.module.css';
const Textfield = (props) => {
  return (
    <label className={classes.label}>
      <span>{props.title}</span>
      <input
        value={props.value}
        type="text"
        className={classes.input_container}
        name="title"
        required
        onChange={props.onChange}
      />
    </label>
  );
  
};

export default Textfield;
