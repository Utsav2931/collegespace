import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Book from "./Card/Card";
import firebase from "../../config/config";
import classes from "./GeneralPage.module.css";
import Loader from "../../components/UI/Loader/Loader";

const db = firebase.firestore();
var array;
class AcademicUse extends Component {
  constructor(props) {
    super(props);
    array = this.props.match.url.split("/");
    console.log(props);
    this.state = {
      academicData: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.getMyArtical();
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
        } else {
          this.setState(
            {
              ...this.state.academicData,
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

  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <BasicLayout>
        <div className={classes.titleHeader}>
          {this.capitalizeFirstLetter(array[5])}
        </div>
        {/* <div className={classes.GeneralPage}> */}
        <div className={classes.headercontent}>
          {array[2].toUpperCase()}-{array[3].toUpperCase()} /{" "}
          {array[4].toUpperCase()} / {array[6].toUpperCase()}
        </div>
        <div className={classes.GeneralRow}>
          {this.state.isLoaded ? (
            this.state.academicData != "" ? (
              this.state.academicData.map((variable, index) => {
                return (
                  <Book
                    varr={variable}
                    propp={this.props}
                    path={array}
                    key={index}
                  />
                );
              })
            ) : (
              <div>No data</div>
            )
          ) : (
            <Loader />
          )}
        </div>
      </BasicLayout>
    );
  }
}

export default AcademicUse;
