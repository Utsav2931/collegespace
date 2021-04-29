import React, { Component } from "react";
import classes from "./Homescreen.module.css";
import Posts from "./Posts/Posts";
import firebase from "../../config/config";
import BasicPadding from "../../components/UI/BasicCompPadding/BasicLayout";
import Loader from "../../components/UI/Loader/Loader";
const db = firebase.firestore();

export class Homescreen extends Component {
  limit = 2;
  // state of the this screen
  state = {
    posts: [],
    isLoaded: false,
  };

  // Runs this function, whenever this page loads
  componentDidMount() {
    this.getPosts();
  }

  // increment the limit of the post
  incLimit = () => {
    console.log("click");
    this.limit += 2;
    this.getPosts();
  };

  // This function gets the posts from the database
  getPosts = () => {
    db.collection("Posts")
      .orderBy("createDate", "desc")
      .limit(this.limit)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticals = [];

          // store each data in local array, "allArticals"
          docs.forEach(function (doc) {
            if (doc.data().verified) {
              const artical = {
                id: doc.id,
                ...doc.data(),
              };
              allArticals.push(artical);
            }
          });

          // set this all data to the state object
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

  // React function to render the UI
  render() {
    return (
      <BasicPadding>
        {/* checks whether the data is retrieved or not, after getting data, it passes to the Posts component */}
        {this.state.isLoaded ? (
          <Posts posts={this.state.posts} />
        ) : (
          <center>
            <Loader />
          </center>
        )}

        {/* Display showmore button after the data is loaded */}
        {this.state.isLoaded ? (
          <div onClick={this.incLimit} className={classes.showmoreButton}>
            Show more
          </div>
        ) : (
          <div></div>
        )}
      </BasicPadding>
    );
  }
}

export default Homescreen;
