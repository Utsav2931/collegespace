import React, { useContext } from "react";
import { ThemeContext } from "../DarkMode/ThemeContext";
import classes from "./Checkbox.module.css";
import cx from "classnames";
// generate the checkbox
const Checkbox = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <input
        style={{ display: "none" }}
        className={cx(classes.checkboxTools) + (theme == "light" ? '' : ' ' + cx(classes.checkboxToolsDark))}
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked === props.value}
        id={props.id}
        onChange = {props.OnchageValue}
      ></input>

      <label className={classes.checkboxTools} for={props.id}>
        {props.title}
      </label>
    </>
  );
};

export default Checkbox;
