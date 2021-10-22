import React, { useContext } from "react";
import classes from "../../UI/Modal/Modal.module.css";
import { ThemeContext } from "../DarkMode/ThemeContext";
import cx from "classnames";

// component for Generating the background for the loader
const GeneralModal = (props) => {
  const {theme} = useContext(ThemeContext); 
  return (
    <div className={classes.LoadingContainerBody}>
      <div className={cx(classes.LoadingBackground) + (theme === "light" ? '' : ' ' + cx(classes.LoadingBackgroundDark))}>{props.children}</div>
    </div>
  );
};

export default GeneralModal;
