import React, { Component } from "react";
import BasicLayout from "../../../components/UI/BasicCompPadding/BasicLayout";
import firebase from "../../../config/config";
import classes from "./Timetable.module.css";
import Loader from "../../../components/UI/Loader/Loader";
import TimetableComp from "./TimetableComp";

const db = firebase.firestore();
var arrayy;
class Timetable extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    arrayy = this.props.match.url.split("/");
    this.state = {
      timetables: [],
      isLoaded: false,
      title: "",
    };
  }
  componentDidMount() {
    this.getMyArtical();
  }

  getMyArtical = () => {
    console.log("in getMyArtical");
    console.log(arrayy);

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

  render() {
    return (
      <BasicLayout>
        <div className={classes.titleHeader}>Timetable</div>

        <div className={classes.col}>
          {this.state.isLoaded ? (
            this.state.timetables != "" ? (
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
