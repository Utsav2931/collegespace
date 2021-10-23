import React, {useContext} from "react";
import BasicLayout from "../BasicCompPadding/BasicLayout";
import classes from "./ErrorModal.module.css";
import choosePath from "../../../assets/Images/choosePath.png";
import { ThemeContext } from "../DarkMode/ThemeContext";
import cx from "classnames";

// Error model, used this component to display error message
const ErrorModal = (props) => {
  const { theme } = useContext(ThemeContext);;
  return (
    <BasicLayout>
      <div className={cx(classes.ErrorModal) + (theme === "light" ? '' : ' ' + cx(classes.ErrorModalDark) )}>
        <img src={choosePath} className={classes.pathImage}></img>
        <div className={classes.heading}>Haven't chosen a PATH yet?</div>
        <div className={classes.dec}>
          To access this, you need to choose your college, <br></br> department
          and semester to create a path
        </div>

        <button className={classes.buttonStyle} type="button" onClick={props.onclick}>
          Choose Path
        </button>
      </div>
    </BasicLayout>
  );
};

export default ErrorModal;
