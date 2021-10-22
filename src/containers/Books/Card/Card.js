import React, { useContext } from "react";
import classes from "../Card/Card.module.css";
import image from "../../../assets/Images/image.png";
import paperImg from "../../../assets/Images/paper.png";
import bookImg from "../../../assets/Images/books.png";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../components/UI/DarkMode/ThemeContext";
import cx from "classnames";

// Generate the card and display the content which is received from props
const Book = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    //  add the id to the path
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`${props.propp.history.location.pathname}/${props.varr.id}`}
    >
      <div
        className={
          cx(classes.Book) +
          (theme == "light" ? "" : " " + cx(classes.BookDark))
        }
        onClick={() => {
          const url = props.varr.link;
          if (url != null) window.open(url, "_blank");
        }}
      >
        {props.propp.match.params.id == "paper" ||
        props.propp.match.url.split("/")[5] == "paper" ? (
          <img className={classes.cardImage} src={paperImg}></img>
        ) : props.propp.match.params.id == "Books" ||
          props.propp.match.url.split("/")[5] == "Books" ? (
          <img className={classes.cardImage} src={bookImg}></img>
        ) : (
          <img className={classes.cardImage} src={image}></img>
        )}
        <div className={classes.text}>
          <div className={classes.authorText}>{props.varr.author}</div>
          <div
            className={
              cx(classes.titleText) +
              (theme == "light" ? "" : " " + cx(classes.titleTextDark))
            }
          >
            {props.varr.title}
          </div>
          <div className={classes.descText}>{props.varr.desc}</div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
