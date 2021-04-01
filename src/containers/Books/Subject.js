import classes from "./Subject.module.css";
import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Book from "./Card/Card";
import Category from "./category/Category";
import firebase from "../../config/config";
import GeneralPage from "./GeneralPage";
import { Link } from "react-router-dom";


const db = firebase.firestore();
var arrayy;
class Subject extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      subjects: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.getMyArtical();
  }

  getMyArtical = () => {
    console.log("in getMyArtical");
    console.log(this.props.location.pathname);
    arrayy = this.props.location.pathname.split("/");
    console.log(arrayy[2]);
    db.collection("academics")
      .doc(arrayy[2])
      .collection("department")
      .doc(arrayy[3])
      .collection("sem")
      .doc(arrayy[4])
      .collection("subjects")
      .get()
      .then((docs) => {
        console.log("in doc");
        if (!docs.empty) {
          let allArticals = [];
          docs.forEach(function (doc) {
            console.log("in foreach");
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
      // <div>
      //   <h1>
      //     <Link
      //       to={`/Academics/cspit/ce/1/notes/BEEE`}
      //     >
      //       Hello
      //     </Link>
      //   </h1>
      // </div>
      <GeneralPage
        state={this.state}
        variable = {this.state.subjects}
        propsIds={this.props}
      />
      //   <BasicLayout>
      //   <div className={classes.GeneralPage}>
      //     <div className={classes.div}>
      //       <p className={classes.titleHeader}>Books</p>
      //       <div className={classes.GeneralRow}>
      //         {this.state.isLoaded ? (
      //           props.variable.map(( variable, index) => {
      //             return <Book varr={variable} path={Pathlocation} propp = {props.propsIds}key={index} />;
      //           })
      //         ) : (
      //           <div>Loading!!</div>
      //         )}
      //       </div>
      //     </div>

      //     <div className={classes.right}>
      //       <Category />
      //     </div>
      //   </div>
      // </BasicLayout>
    );
  }
}

export default Subject;
