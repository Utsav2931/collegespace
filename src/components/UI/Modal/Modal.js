import React, {useContext} from "react";
import cx from "classnames";
import classes from "./Modal.module.css";
import { ThemeContext } from "../DarkMode/ThemeContext";

// Modal to focus only certain screen and blurs the other non use screen
const Modal = ({ handleClose, show, children }) => {
  const { theme } = useContext(ThemeContext);
  const showHideClassName = show
    ? cx(classes.modal, classes.bodyOfContainer)
    : cx(classes.modal, classes.display_none);

  return (
    <div className={showHideClassName}>
      <div className={cx(classes.cookiesContent) + (theme == "light" ? '' : ' ' + cx(classes.cookiesContentDark) )}>
        <button className={cx(classes.button_close) + (theme ==="light" ? '' : ' ' + cx(classes.button_closeDark))} onClick={handleClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
