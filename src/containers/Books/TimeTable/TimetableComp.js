import React, { useContext } from "react";
import classes from "./Timetable.module.css";
import cx from "classnames";
import { ThemeContext } from "../../../components/UI/DarkMode/ThemeContext";

// It's a laytout to display the time-table 
const TimetableComp = (props) => {
  const {theme} =  useContext(ThemeContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={cx(classes.headercontent) + (theme == "light" ? '' : ' ' + cx(classes.headercontentDark))}>{props.class}</div>
      <div>
        <img src={props.image} className={classes.img}></img>
      </div>
    </div>
  );
};

export default TimetableComp;
