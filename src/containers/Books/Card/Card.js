import React from "react";
import classes from "../Card/Card.module.css";
import image from "../../../assets/Images/image.png";
import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <Link to={`${props.propp.history.location.pathname}/${props.varr.id}`}>
      <div className={classes.Book} >
        <img className={classes.cardImage} src={image}></img>
        <div className={classes.text}>
          <div className={classes.titleText}>{props.varr.title}</div>
          <div className={classes.descText}>{props.varr.desc}</div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
