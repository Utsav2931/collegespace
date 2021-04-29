import React from "react";
import classes from "./Timetable.module.css";

// It's a laytout to display the time-table 
const TimetableComp = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.headercontent}>{props.class}</div>
      <div>
        <img src={props.image} className={classes.img}></img>
      </div>
    </div>
  );
};

export default TimetableComp;
