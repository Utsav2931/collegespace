import React, { Component } from "react";
import classes from "./Homescreen.module.css";
import Posts from "./Posts/Posts";
import firebase from "../../config/config";
import BasicPadding from "../../components/UI/BasicCompPadding/BasicLayout";

const db = firebase.firestore();

export class Homescreen extends Component {
  state = {
    posts: [],
    isLoaded: false,
  };
  // state = {
  //   posts: [
  //     {
  //       id: "fwfw",
  //       title: "Finite Autometa Example - ",
  //       dess:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum",
  //       image: image,
  //     },

  //     {
  //       id: "fwfw",
  //       title: "Finite Autometa Example - ",
  //       dess:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum",
  //       image: image,
  //     },

  //     {
  //       id: "fwfw",
  //       title: "Finite Autometa Example - ",
  //       dess:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum",
  //       image: image,
  //     },

  //     {
  //       id: "fwfw",
  //       title: "Finite Autometa Example - ",
  //       dess:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum",
  //       image: null,
  //     },
  //   ],
  //   showPerson: false,
  // };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    db.collection("Posts").orderBy("createDate", "desc")
    // .where("verified", "==", true)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticals = [];
          docs.forEach(function (doc) {
           if(doc.data().verified){
            const artical = {
              id: doc.id,
              ...doc.data(),
            };
            // console.log(doc.data().verified)
            allArticals.push(artical);
           }
          });

          this.setState(
            {
              posts: allArticals,
            },
            () => {
              this.setState({
                isLoaded: true,
              });
            }
          );
        }
      });
  };

  render() {
    return (
      // <div className={classes.OuterDiv}>
      <BasicPadding>
          {this.state.isLoaded ? <Posts posts={this.state.posts} /> : ""}
      </BasicPadding>

      // </div>
    );
  }
}

export default Homescreen;
