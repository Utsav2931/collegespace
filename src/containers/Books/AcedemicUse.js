import classes from "./Subject.module.css";
import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Book from "./Card/Card";
import Category from "./category/Category";
import firebase from "../../config/config";
import GeneralPage from "./GeneralPage";

const db = firebase.firestore();
var array;
class AcademicUse extends Component {
  constructor(props) {
    super(props);
    console.log(" in AcademicUse");
    console.log(" in AcademicUse");

    // let stringg = this.props.match.params.url;
    // array = props.match.params.url.split("/");
    // alert(array[0]);
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
    console.log(this.props.location.pathname);
    array = this.props.location.pathname.split("/");
    console.log(array[2]);
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
      // <div>
      //  <h1>Hello THere</h1>
      // </div>
      <GeneralPage 
      state={this.state}
      variable = {this.state.academicData}
      propsIds={this.props}

      // state={this.state}
      // paramsId={this.props.match.params.id} 
      />
    );
  }
}

export default AcademicUse;
