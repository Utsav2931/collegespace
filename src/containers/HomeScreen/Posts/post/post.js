import React from "react";
import classes from "./post.module.css";
import { Carousel } from "react-bootstrap";
import cx from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import parse from "html-react-parser";


const post = (props) => {
  console.log(props.theme);
  console.log(props.image.length);
  // checks whether image is available or not, if not return the other card
  if (props.image.length !== 0) {
    return (
      <div className={classes.Post + (props.theme === 'light' ? '' : ' ' + classes.PostDark)}>
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
        <div className={classes.heading + (props.theme === 'light' ? '' : ' ' + classes.headingDark)}>{props.title}</div>

        {/* display description */}
        <div className={classes.desc}>{parse(props.dess)}</div>

        {/* Display link, if available */}
        <a
          style={{ textDecoration: "none" }}
          className={props.link != "" ? classes.linkButton + (props.theme === 'light' ? '' : ' ' + classes.linkButtonDark) : classes.noDisplay}
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
    <div className={classes.Post + (props.theme === 'light' ? '' : ' ' + classes.PostDark)}>
       <div className={classes.categoryLable}>{props.categoryLable}</div>
      <div className={classes.text}>
      <div className={classes.heading + (props.theme === 'light' ? '' : ' ' + classes.headingDark)}>{props.title}</div>
        <p className={classes.desc}>{parse(props.dess)}</p>
        <a
          style={{ textDecoration: "none" }}
          className={props.link != "" ? classes.linkButton + (props.theme === 'light' ? '' : ' ' + classes.linkButtonDark) : classes.noDisplay}
          href={props.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Link here
        </a>
      </div>
    </div>
  );
};

export default post;
