import React from "react";
import classes from "./post.module.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import placeholder from "../../../../assets/Images/books.png";
import cx from "classnames";

const post = (props) => {
  if (props.image !== null) {
    return (
      <div className={classes.Post}>
        <div className={classes.heading}>{props.title}</div>
        
        <Carousel controls={TextTrackCueList}>
          {props.image.map((pic) => {
            console.log(pic);
            return (
              <Carousel.Item interval={50000}>
                <img
                  className={(cx("d-block w-100"), classes.img)}
                  src={pic}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        
        <p className={classes.text}>{props.dess}</p>
        {props.link != null ? <a
          href={props.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Click here
        </a> : <div></div>}
      </div>
    );
  }
  return (
    <div className={classes.Post}>
      <div className={classes.text}>
        <div className={classes.heading}>{props.title}</div>
        <p className={classes.text}>{props.dess}</p>
      </div>
    </div>
  );
};

export default post;

// Finite Autometa Example
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
//           imperdiet, nulla et dictum interdum
