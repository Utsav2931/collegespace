import classes from "./Category.module.css";
import React from "react";
import image from "../../../assets/Images/placeholder.png";

const Title = (props) => {
  return (
    <div>
      <div className={classes.type}>{props.type}</div>
      <div className={classes.typeText}>{props.value}</div>
    </div>
  );
};

const Category = (props) => {
  return (
    <div>
      <div className={classes.Category}>
        <div className={classes.details}>
          <Title
            type="Dep"
            value={`${props.path[2].toUpperCase()} - ${props.path[3].toUpperCase()}`}
          />

          <Title
            type="Subject"
            value={props.sub.toUpperCase()}
          />

          <Title
            type="Semester"
            value={`${props.path[4].toUpperCase()}`}
          />
          {/* <Title type="College" value="CSPIT" /> */}
        </div>
      </div>

      <div>
        <button
          //   onClick={(e) => this.handleValidation(e)}
          className={classes.cardbutton}
        >
          Filter
        </button>
      </div>

      {/* <div>Hello</div> */}
    </div>
  );
};

export default Category;
