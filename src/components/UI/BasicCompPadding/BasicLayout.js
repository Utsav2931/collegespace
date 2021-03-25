import React from "react";
import classes from './BasicLayout.module.css';
const BasicLayout = (props) => {
  return (
    <div className={classes.BasicLayout}>
        {props.children}
    </div>
  );
};

export default BasicLayout;
