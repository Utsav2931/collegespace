import React from "react";
import classes from "../../UI/Modal/Modal.module.css";

const GeneralModal = (props) => {
  // console.log(props.showLoader);
  // props.showLoader
  //   ? document.body.setAttribute("style", `position: fixed; left:0; right:0;`)
  //   : document.body.setAttribute("style", ``);

  return (
    <div className={classes.bodyOfContainer}>
      <div className={classes.LoadingBackground}>{props.children}</div>
    </div>
  );
};

export default GeneralModal;
