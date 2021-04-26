import React from "react";
import classes from "./post.module.css";
import { Carousel } from "react-bootstrap";
import cx from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const post = (props) => {
  if (props.image !== null ) {
    return (
      <div className={classes.Post}>
        <div className={classes.categoryLable}>{props.categoryLable}</div>
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

        <div className={classes.heading}>{props.title}</div>

        <div className={classes.desc}>{props.dess}</div>
        
          <a
            style={{ textDecoration: "none" }}
            className={
              props.link != "" ? classes.linkButton : classes.noDisplay
            }
            href={props.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            Link here
          </a>
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
