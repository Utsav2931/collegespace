import React from "react";
import cx from "classnames";
import classes from "./Modal.module.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? cx(classes.modal, classes.bodyOfContainer)
    : cx(classes.modal, classes.display_none);

  return (
    // <div className={showHideClassName}>
    //   <section className={classes.modal_main}>
    //     {children}
    //     <button onClick={handleClose}>Close</button>
    //   </section>
    // </div>

    <div className={showHideClassName}>
      <div className={classes.cookiesContent}>
        <button className={classes.button_close} onClick={handleClose}>✖</button>
        {children}
        {/* <img
          src="https://www.flaticon.com/svg/static/icons/svg/2913/2913782.svg"
          alt="cookies-img"
        />
        <p>
          We use cookies for improving user experience, analytics and marketing.
        </p>
        <button className={classes.button_accept}>That's fine!</button> */}
      </div>
    </div>
  );
};

export default Modal;
