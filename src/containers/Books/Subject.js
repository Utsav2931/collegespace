import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Card from "./Card/Card";
import firebase from "../../config/config";
import classes from "./GeneralPage.module.css";
import Loader from "../../components/UI/Loader/Loader";

const db = firebase.firestore();
var arrayy;

// Used to display the subject cards
class Subject extends Component {
  // used to initialize the arrayy var using the link of the page(using react router)
  constructor(props) {
    super(props);
    arrayy = this.props.match.url.split("/");

    // State of this page
    this.state = {
      subjects: [],
      isLoaded: false,
      title: "",
    };
  }

  // executes when the screen is displayed
  componentDidMount() {
    this.getSubjects();
  }

  // get the data of all subjects in the selected field
  getSubjects = () => {
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
        } else {
          this.setState(
            {
              ...this.state.subjects,
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
          {this.capitalizeFirstLetter(this.props.match.params.id)}
        </div>
        <div className={classes.headercontent}>
          {arrayy[2].toUpperCase()}-{arrayy[3].toUpperCase()} /{" "}
          {arrayy[4].toUpperCase()} / Select Subject
        </div>
        <div className={classes.GeneralRow}>
          {this.state.isLoaded ? (
            this.state.subjects != "" ? (
              // maps all the data one by one to the Card component to display nicely to user
              this.state.subjects.map((variable, index) => {
                return (
                  <Card
                    varr={variable}
                    propp={this.props}
                    path={arrayy}
                    key={index}
                  />
                );
              })
            ) : (
              <div>No Data</div>
            )
          ) : (
            <Loader />
          )}
        </div>
      </BasicLayout>
    );
  }
}

export default Subject;
