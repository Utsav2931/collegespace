import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Book from "./Card/Card";
import Category from "./category/Category";
import firebase from "../../config/config";
import classes from "./GeneralPage.module.css";

const db = firebase.firestore();
var array;
class AcademicUse extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    array = this.props.location.pathname.split("/");
    this.state = {
      academicData: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.getMyArtical();
    this.setState({
      title: array[5],
    });
  }

  getMyArtical = () => {
    console.log("in getMyArtical");
    console.log(array);
    db.collection("academics")
      .doc(array[2])
      .collection("department")
      .doc(array[3])
      .collection("sem")
      .doc(array[4])
      .collection("subjects")
      .doc(array[6])
      .collection(array[5])
      // .limit(8)
      // .where("isPublished", "==", true)
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
              academicData: allArticals,
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
      // <GeneralPage
      // state={this.state}
      // variable = {this.state.academicData}
      // propsIds={this.props}
      // sub={this.state.academicData.subject}
      // />
      

      <BasicLayout>
        <div className={classes.GeneralPage}>
          <div className={classes.div}>
            <p className={classes.titleHeader}>{array[5]}</p>
            <div className={classes.GeneralRow}>
              {this.state.isLoaded ? (
                this.state.academicData.map((variable, index) => {
                  return (
                    <Book varr={variable} propp={this.props} key={index} />
                  );
                })
              ) : (
                <div>Loading!!</div>
              )}
            </div>
          </div>

          <div className={classes.right}>
            <Category path={array} sub={array[6]} />
          </div>
        </div>
      </BasicLayout>
    );
  }
}

export default AcademicUse;
