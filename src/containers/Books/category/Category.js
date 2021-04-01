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

const Category = () => {
  return (
    <div>
      <div className={classes.Category}>
        <div className={classes.details}>
          <Title type="Dep" value="CSPIT - Computer Engineering" />
          <Title type="Subject" value="Theory of computation" />
          <Title type="Semester" value="6th" />
          {/* <Title type="College" value="CSPIT" /> */}

        </div>
      </div>

      <div>
        <button
          //   onClick={(e) => this.handleValidation(e)}
          className={classes.cardbutton}
        >
          Submit
        </button>
      </div>

      {/* <div>Hello</div> */}
    </div>
  );
};

export default Category;
