import React, { useContext, useState } from "react";
import image from "../../../assets/Images/image.png";
import classes from "../../../containers/Books/Card/Card.module.css";
import cx from "classnames";
import { ThemeContext } from "../DarkMode/ThemeContext";

const VideoCard = ({title, desc}) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div
      className={
        cx(classes.Book) + (theme == "light" ? "" : " " + cx(classes.BookDark))
      }
      //   onClick={() => {
      //     const url = props.varr.link;
      //     if (url != null) window.open(url, "_blank");
      //   }}
    >
      <img className={classes.cardImage} src={image}></img>
      <div className={classes.text}>
        <div className={classes.authorText}>Admin</div>
        <div
          className={
            cx(classes.titleText) +
            (theme == "light" ? "" : " " + cx(classes.titleTextDark))
          }
        >
          {title}
        </div>
        <div className={classes.descText}>{desc}</div>
      </div>
    </div>
  );
};

export default VideoCard;
