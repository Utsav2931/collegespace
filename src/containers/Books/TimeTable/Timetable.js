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

  //   capitalizeFirstLetter = (str) => {
  //     return str.charAt(0).toUpperCase() + str.slice(1);
  //   };

  render() {
    return (
      <BasicLayout>
        <div className={classes.titleHeader}>
          Timetable
          {/* {this.capitalizeFirstLetter(this.props.match.params.id)} */}
        </div>

        {/* <div className={classes.GeneralPage}> */}
        <div className={classes.col}>
          {this.state.isLoaded ? (
            this.state.subjects.map((variable, index) => {
              return (
                //   <Card
                //     varr={variable}
                //     propp={this.props}
                //     path={arrayy}
                //     key={index}
                //   />
                
                <TimetableComp class={variable.class} image={variable.image}/>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </BasicLayout>
    );
  }
}

export default Timetable;
