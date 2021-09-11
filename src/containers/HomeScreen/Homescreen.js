import React, { Component } from "react";
import classes from "./Homescreen.module.css";
import Posts from "./Posts/Posts";
import firebase from "../../config/config";
import BasicPadding from "../../components/UI/BasicCompPadding/BasicLayout";
import Loader from "../../components/UI/Loader/Loader";
import cx from "classnames";

const db = firebase.firestore();

// Displays posts in the home screen
export class Homescreen extends Component {
  limit = 3;
  limitAcedemicPosts = 3;
  // state of the this screen
  state = {
    posts: [],
    AcedemicsPosts: [],
    isLoaded: false,
    isLoadedAcedemics: false,
    toggleState: 1,
    endOfPost: false,
    endOfPostAcedemics: false,
  };

  // Runs this function, whenever this page loads
  componentDidMount() {
    this.getPosts();
    this.getAcedemicPosts();
  }

  // increment the limit of the post
  incLimit = () => {
    this.limit += 2;
    this.getPosts();
  };

  incLimitAcedemics = () => {
    this.limitAcedemicPosts += 2;
    this.getAcedemicPosts();
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

          if (allArticals.length == this.state.posts.length) {
            this.setState({
              endOfPost: true,
            });
          }
          // set this all data(stored in allArticals) to the state object
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

  getAcedemicPosts = () => {
    db.collection("AcademicPosts")
      .orderBy("createDate", "desc")
      .limit(this.limitAcedemicPosts)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticalsAcedemics = [];

          // store each data in local array, "allArticals"
          docs.forEach(function (doc) {
            if (doc.data().verified) {
              const artical = {
                id: doc.id,
                ...doc.data(),
              };
              allArticalsAcedemics.push(artical);
            }
          });

          if (allArticalsAcedemics.length == this.state.AcedemicsPosts.length) {
            this.setState({
              endOfPostAcedemics: true,
            });
          }

          // set this all data(stored in allArticals) to the state object
          this.setState(
            {
              AcedemicsPosts: allArticalsAcedemics,
            },
            () => {
              this.setState({
                isLoadedAcedemics: true,
              });
            }
          );
        }
      });
  };

  toggleTab = (index) => {
    this.setState({
      toggleState: index,
    });
  };

  // React function to render the UI
  render() {
    return (
      <BasicPadding>
        <div className={classes.container}>
          <div className={classes.bloctabs}>
            <div
              className={
                this.state.toggleState === 1
                  ? cx(classes.tabs, classes.activetabs)
                  : cx(classes.tabs)
              }
              onClick={() => this.toggleTab(1)}
            >
              Posts
            </div>
            <div
              className={
                this.state.toggleState === 2
                  ? cx(classes.tabs, classes.activetabs)
                  : cx(classes.tabs)
              }
              onClick={() => this.toggleTab(2)}
            >
              Academic Posts
            </div>
          </div>

          <div className={classes.contenttabs}>
            <div
              className={
                this.state.toggleState === 1
                  ? cx(classes.content, classes.activecontent)
                  : cx(classes.content)
              }
            >
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
                this.state.endOfPost ? (
                  <div></div>
                ) : (
                  <button
                    onClick={this.incLimit}
                    className={classes.showmoreButton}
                  >
                    Show more
                  </button>
                )
              ) : (
                <div></div>
              )}
            </div>

            <div
              className={
                this.state.toggleState === 2
                  ? cx(classes.content, classes.activecontent)
                  : cx(classes.content)
              }
            >
              {/* checks whether the data is retrieved or not, after getting data, it passes to the Posts component */}
              {this.state.isLoadedAcedemics ? (
                <Posts posts={this.state.AcedemicsPosts} />
              ) : (
                <center>
                  <Loader />
                </center>
              )}

              {/* Display showmore button after the data is loaded */}
              {this.state.isLoadedAcedemics ? (
                this.state.endOfPostAcedemics ? (
                  <div></div>
                ) : (
                  <button
                    onClick={this.incLimitAcedemics}
                    className={classes.showmoreButton}
                  >
                    Show more
                  </button>
                )
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </BasicPadding>
    );
  }
}

export default Homescreen;
