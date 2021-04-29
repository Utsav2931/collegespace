import React from "react";
import classes from "./post.module.css";
import { Carousel } from "react-bootstrap";
import cx from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

const post = (props) => {
  // checks whether image is available or not, if not return the other card
  if (props.image !== null) {
    return (
      <div className={classes.Post}>
        <div className={classes.categoryLable}>{props.categoryLable}</div>

        {/* carousel displays a image or multiple images */}
        <Carousel controls={TextTrackCueList}>
          {/* maping all the image to carousel */}
          {props.image.map((pic) => {
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

        {/* display title */}
        <div className={classes.heading}>{props.title}</div>

        {/* display description */}
        <div className={classes.desc}>{props.dess}</div>

        {/* Display link, if available */}
        <a
          style={{ textDecoration: "none" }}
          className={props.link != "" ? classes.linkButton : classes.noDisplay}
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
