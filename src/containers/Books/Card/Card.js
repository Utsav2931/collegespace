import React from "react";
import classes from "../Card/Card.module.css";
import image from "../../../assets/Images/image.png";
import paperImg from "../../../assets/Images/paper.png";
import bookImg from "../../../assets/Images/books.png";
import { Link } from "react-router-dom";

const Book = (props) => {
  console.log(props.propp.match.url.split("/")[5]);
  return (
    <Link style={{ textDecoration: "none" , color: "black" }} to={`${props.propp.history.location.pathname}/${props.varr.id}`}>
      <div
        className={classes.Book}
        onClick={() => {
          const url = props.varr.link;
          if (url != null) window.open(url, "_blank");
        }}
      >
        {(props.propp.match.params.id == "paper" || props.propp.match.url.split("/")[5]  == "paper") ? (
          <img className={classes.cardImage} src={paperImg}></img>
        ) : (props.propp.match.params.id == "Books" || props.propp.match.url.split("/")[5] == "Books") ? (
          <img className={classes.cardImage} src={bookImg}></img>
        ) : (
          <img className={classes.cardImage} src={image}></img>
        )}
        <div className={classes.text}>
          <div className={classes.authorText}>{props.varr.author}</div>
          <div className={classes.titleText}>{props.varr.title}</div>
          <div className={classes.descText}>{props.varr.desc}</div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
