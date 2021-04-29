import React, { Component } from "react";
import BasicLayout from "../../../components/UI/BasicCompPadding/BasicLayout";
import firebase from "../../../config/config";
import classes from "./Timetable.module.css";
import Loader from "../../../components/UI/Loader/Loader";
import TimetableComp from "./TimetableComp";

const db = firebase.firestore();
var arrayy;
// Used to display time-table respected to the Department
class Timetable extends Component {
  // used to initialize the arrayy var using the link of the page(using react router)
  constructor(props) {
    super(props);
    arrayy = this.props.match.url.split("/");
    // State of this page
    this.state = {
      timetables: [],
      isLoaded: false,
      title: "",
    };
  }
  // executes when the screen load
  componentDidMount() {
    this.getTimetables();
  }

  // get the data of all time-table of selected department
  getTimetables = () => {
    db.collection("academics")
      .doc(arrayy[2])
      .collection("department")
      .doc(arrayy[3])
      .collection("sem")
      .doc(arrayy[4])
      .collection("timetable")
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
              timetables: allArticals,
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
              ...this.state.timetables,
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

  // to render the UI
  render() {
    return (
      <BasicLayout>
        <div className={classes.titleHeader}>Timetable</div>

        <div className={classes.col}>
          {this.state.isLoaded ? (
            this.state.timetables != "" ? (
              // maps all the data one by one to the TimetableComp component to display nicely to user
              this.state.timetables.map((variable, index) => {
                return (
                  <TimetableComp
                    class={variable.class}
                    image={variable.image}
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

export default Timetable;
