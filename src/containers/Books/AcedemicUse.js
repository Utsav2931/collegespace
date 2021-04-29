import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Book from "./Card/Card";
import firebase from "../../config/config";
import classes from "./GeneralPage.module.css";
import Loader from "../../components/UI/Loader/Loader";

const db = firebase.firestore();
var array;

// Used to display papers, books, and notes respected to the subject
class AcademicUse extends Component {
  // used to initialize the array var using the link of the page(using react router)
  constructor(props) {
    super(props);
    array = this.props.match.url.split("/");
    // State of this page
    this.state = {
      academicData: [],
      isLoaded: false,
    };
  }

  // executes when the screen is displayed
  componentDidMount() {
    this.getMaterials();
  }

  // get the data of all books or notes or papers
  getMaterials = () => {
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

  // make capital first letter of a word
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // to render the UI
  render() {
    return (
      <BasicLayout>
        <div className={classes.titleHeader}>
          {this.capitalizeFirstLetter(array[5])}
        </div>
        <div className={classes.headercontent}>
          {array[2].toUpperCase()}-{array[3].toUpperCase()} /{" "}
          {array[4].toUpperCase()} / {array[6].toUpperCase()}
        </div>
        <div className={classes.GeneralRow}>
          {this.state.isLoaded ? (
            this.state.academicData != "" ? (
              // maps all the data one by one to the Card component to display nicely to user
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
