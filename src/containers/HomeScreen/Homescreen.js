import React, { Component } from "react";
import classes from "./Homescreen.module.css";
import image from "../../assets/Images/placeholder.png";
import Posts from "./Posts/Posts";

export class Homescreen extends Component {
  state = {
    posts: [
      {
        id: "fwfw",
        title: "Finite Autometa Example - ",
        dess:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum",
        image: image,
      },

      {
        id: "fwfw",
        title: "Finite Autometa Example - ",
        dess:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum",
        image: image,
      },

      {
        id: "fwfw",
        title: "Finite Autometa Example - ",
        dess:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum",
        image: image,
      },

      {
        id: "fwfw",
        title: "Finite Autometa Example - ",
        dess:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum",
        image: null,
      },
    ],
    showPerson: false,
  };
  render() {
    return (
      <div className={classes.OuterDiv}>
        <div className={classes.Homescreen}>
          <Posts posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default Homescreen;
