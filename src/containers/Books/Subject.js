import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Card from "./Card/Card";
import Category from "./category/Category";
import firebase from "../../config/config";
import GeneralPage from "./GeneralPage";
import { Link } from "react-router-dom";
import classes from "./GeneralPage.module.css";

const db = firebase.firestore();
var arrayy;
class Subject extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    arrayy = this.props.match.url.split("/");
    this.state = {
      subjects: [],
      isLoaded: false,
      title: "",
    };
  }
  componentDidMount() {
    this.getMyArtical();
  }

  getMyArtical = () => {
    console.log("in getMyArtical");
    // console.log(this.props.location.pathname);
    console.log(arrayy);

    db.collection("academics")
      .doc(arrayy[2])
      .collection("department")
      .doc(arrayy[3])
      .collection("sem")
      .doc(arrayy[4])
      .collection("subjects")
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticals = [];
          docs.forEach(function (doc) {
            const artical = {
              id: doc.id,
              ...doc.data(),
            };
            allArticals.push(artical);
          });

          this.setState(
            {
              subjects: allArticals,
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
      //   state={this.state}
      //   variable = {this.state.subjects}
      //   propsIds={this.props}
      //   // sub={this.state.subjects.subject}
      <BasicLayout>
        <div className={classes.GeneralPage}>
          <div className={classes.div}>
            <p className={classes.titleHeader}>{this.props.match.params.id}</p>
            <div className={classes.GeneralRow}>
              {this.state.isLoaded ? (
                this.state.subjects.map((variable, index) => {
                  return (
                    <Card varr={variable} propp={this.props} path={arrayy} key={index} />
                  );
                })
              ) : (
                <div>Loading!!</div>
              )}
            </div>
          </div>

          <div className={classes.right}>
            <Category path={arrayy} sub="Select Subject" />
          </div>
        </div>
      </BasicLayout>
    );
  }
}

export default Subject;
