import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Book from "./Card/Card";
import firebase from "../../config/config";
import classes from "./GeneralPage.module.css";
import Loader from "../../components/UI/Loader/Loader";
import cx from "classnames";

const db = firebase.firestore();
var array;

// Used to display papers, books, and notes respected to the subject
class AcademicUse extends Component {
  //  state.allAticles = [];
  // used to initialize the array var using the link of the page(using react router)
  constructor(props) {
    super(props);
    array = this.props.match.url.split("/");
    // State of this page
    this.state = {
      academicData: [],
      isLoaded: false,
      filter: "",
      allAticles: [],
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
          docs.forEach((doc) => {
            const artical = {
              id: doc.id,
              ...doc.data(),
            };
            this.state.allAticles.push(artical);
          });

          this.setState(
            {
              academicData: this.state.allAticles,
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

  onChangeArticlecategory = (value) => {
    this.setState({
      filter: value,
    });
    console.log(this.state.filter);
    if (value == "All Notes") {
      this.setState({
        academicData: this.state.allAticles,
      });
    } else {
      let filterArtical = [];
      // let this.state.allAticles = [];
      console.log(this.state.academicData);
      this.state.allAticles.forEach(function (doc) {
        if (doc.categoryLable == value) {
          const artical = {
            ...doc,
          };
          filterArtical.push(artical);
        }
      });

      this.setState({
        academicData: filterArtical,
      });
    }
  };

  onChangePapercategory = (value) => {
    this.setState({
      filter: value,
    });
    console.log(this.state.filter);
    if (value == "All Papers") {
      this.setState({
        academicData: this.state.allAticles,
      });
    } else {
      let filterArtical = [];
      // let this.state.allAticles = [];
      console.log(this.state.academicData);
      this.state.allAticles.forEach(function (doc) {
        if (doc.categoryLable == value) {
          const artical = {
            ...doc,
          };
          filterArtical.push(artical);
        }
      });

      this.setState({
        academicData: filterArtical,
      });
    }
  };

  // make capital first letter of a word
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // to render the UI
  render() {
    console.log(array[5]);
    return (
      <BasicLayout>
        <div className={classes.titleHeader}>
          {this.capitalizeFirstLetter(array[5])}
        </div>
        {/* <div className={classes.pathAndFilter}> */}
        <div className={classes.headercontent}>
          <div>
            {array[2].toUpperCase()}-{array[3].toUpperCase()} /{" "}
            {array[4].toUpperCase()} / {array[6].toUpperCase()} /
          </div>
          {array[5] == "notes" ? (
            <div>
              <select
                className={classes.selectFilter}
                onChange={(e) => this.onChangeArticlecategory(e.target.value)}
                // value={this.state.article.categoryLable}
              >
                <option
                  className={classes.optionClass}
                  name="education"
                  selected
                >
                  All Notes
                </option>
                <option className={classes.optionClass} name="education">
                  Assignment
                </option>
                <option className={classes.optionClass} name="education">
                  Practical
                </option>
                <option className={classes.optionClass} name="education">
                  Classnotes
                </option>
                <option className={classes.optionClass} name="education">
                  PPT
                </option>
                <option className={classes.optionClass} name="education">
                  Question Bank
                </option>
              </select>
            </div>
          ) : (
            <div />
          )}

          {array[5] == "paper" ? (
            <div>
              <select
                className={classes.selectFilter}
                onChange={(e) => this.onChangePapercategory(e.target.value)}
                // value={this.state.article.categoryLable}
              >
                <option
                  className={classes.optionClass}
                  name="education"
                  selected
                >
                  All Papers
                </option>
                <option className={classes.optionClass} name="education">
                  Internal papers
                </option>
                <option className={classes.optionClass} name="education">
                  External papers
                </option>
              </select>
            </div>
          ) : (
            <div />
          )}
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
