import React, { Component } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import Book from "./Card/Card";
import firebase from "../../config/config";
import classes from "./GeneralPage.module.css";
import Loader from "../../components/UI/Loader/Loader";
import cx from "classnames";
import { ThemeContext } from "../../components/UI/DarkMode/ThemeContext";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const db = firebase.firestore();
var array;

// Used to display papers, books, and notes respected to the subject
class AcademicUse extends Component {
  static contextType = ThemeContext;
  //  state.allAticles = [];
  // used to initialize the array var using the link of the page(using react router)
  constructor(props) {
    super(props);
    array = this.props.match.url.split("/");
    // State of this page
    this.state = {
      academicData: [],
      isLoaded: false,
      filter: "All Notes",
      year: "All Year",
      allAticles: [],
      YearData: [],
      searchArtical: [],
    };
  }

  // executes when the screen is displayed
  componentDidMount() {
    console.log("component did mount");
    this.getMaterials();
  }

  // componentDidUpdate(){
  //   array[5] == "notes" ? onChangeArticlecategory() : onChangePapercategory();
  // }

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
              searchArtical: this.state.allAticles,
              yearData: this.state.allAticles,
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

  //

  onChangeArticlecategory = (value, yearValue) => {
    this.setState({
      filter: value,
    });
    this.setState({
      year: yearValue,
    });
    console.log("Hello");
    console.log(yearValue);
    console.log(value);
    if (value == "All Notes" && yearValue == "All Year") {
      this.setState({
        academicData: this.state.allAticles,
        searchArtical: this.state.allAticles,
      });
    } else {
      if (value == "All Notes" && yearValue != "All Year") {
        let filterArtical = [];
        // let this.state.allAticles = [];
        this.state.allAticles.forEach(function (doc) {
          if (doc.year == yearValue) {
            const artical = {
              ...doc,
            };
            filterArtical.push(artical);
          }
        });

        this.setState({
          academicData: filterArtical,
          searchArtical: filterArtical,
        });
      } else if (yearValue == "All Year" && value != "All Notes") {
        let filterArtical = [];
        // let this.state.allAticles = [];
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
          searchArtical: filterArtical,
        });
      } else if (yearValue != "All Year" && value != "All Notes") {
        let filterArtical = [];
        // let this.state.allAticles = [];
        this.state.allAticles.forEach(function (doc) {
          if (doc.categoryLable == value && doc.year == yearValue) {
            const artical = {
              ...doc,
            };
            filterArtical.push(artical);
          }
        });

        this.setState({
          academicData: filterArtical,
          searchArtical: filterArtical,
        });
      }
    }
  };

  onChangePapercategory = (value) => {
    this.setState({
      filter: value,
    });
    if (value == "All Papers") {
      this.setState({
        academicData: this.state.allAticles,
      });
    } else {
      let filterArtical = [];
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
    const { theme } = this.context;
    console.log(this.state.searchArtical);
    console.log(this.state.academicData);
    return (
      <BasicLayout>
        <div className={classes.titleHeader}>
          {this.capitalizeFirstLetter(array[5])}
        </div>

        {/* <div className={classes.pathAndFilter}> */}
        <div className={classes.filterAndSearchDiv}>
          <div
            className={
              cx(classes.headercontent) +
              (theme == "light" ? "" : " " + cx(classes.headercontentDark))
            }
          >
            <div>
              {array[2].toUpperCase()}-{array[3].toUpperCase()} /{" "}
              {array[4].toUpperCase()} / {array[6].toUpperCase()} /
            </div>
            {array[5] == "notes" ? (
              <div>
                <select
                  className={
                    cx(classes.selectFilter) +
                    (theme == "light" ? "" : " " + cx(classes.selectFilterDark))
                  }
                  onChange={(e) =>
                    this.onChangeArticlecategory(
                      this.state.filter,
                      e.target.value
                    )
                  }
                  // value={this.state.article.categoryLable}
                >
                  <option name="Year" selected>
                    All Year
                  </option>
                  <option name="Year">2020</option>
                  <option name="Year">2021</option>
                </select>

                <select
                  className={
                    cx(classes.selectFilter) +
                    (theme == "light" ? "" : " " + cx(classes.selectFilterDark))
                  }
                  onChange={(e) =>
                    this.onChangeArticlecategory(
                      e.target.value,
                      this.state.year
                    )
                  }
                  // value={this.state.article.categoryLable}
                >
                  <option name="education" selected>
                    All Notes
                  </option>
                  <option name="education">Assignment</option>
                  <option name="education">Practical</option>
                  <option name="education">Classnotes</option>
                  <option name="education">PPT</option>
                  <option name="education">Question Bank</option>
                </select>
              </div>
            ) : (
              <div />
            )}

            {array[5] == "paper" ? (
              <div>
                <select
                  className={
                    cx(classes.selectFilter) +
                    (theme == "light" ? "" : " " + cx(classes.selectFilterDark))
                  }
                  onChange={(e) => this.onChangePapercategory(e.target.value)}
                  // value={this.state.article.categoryLable}
                >
                  <option name="education" selected>
                    All Papers
                  </option>
                  <option name="education">Internal papers</option>
                  <option name="education">External papers</option>
                </select>
              </div>
            ) : (
              <div />
            )}
          </div>

          <div>
            <form
              action=""
              className={
                cx(classes.formDiv) +
                (theme == "light" ? "" : " " + cx(classes.formDivDark))
              }
            >
              <input
                type="search"
                className={
                  cx(classes.inputText) +
                  (theme == "light" ? "" : " " + cx(classes.inputTextDark))
                }
                type="text"
                onChange={(e) => {
                  console.log(e.target.value);
                  let filterArtical = [];
                  this.state.searchArtical.forEach(function (doc) {
                    if (
                      doc.desc
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                      doc.title
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    ) {
                      const artical = {
                        ...doc,
                      };
                      filterArtical.push(artical);
                    }
                  });
                  this.setState({
                    academicData: filterArtical,
                  });
                }}
                required
              />
              <i
                className={
                  cx(classes.fa) +
                  (theme == "light" ? "" : " " + cx(classes.faDark))
                }
              ><SearchIcon/></i>
              {/* <a href="javascript:void(0)" id="clear-btn">
              Clear
            </a> */}
            </form>
            {/* <input
            style={{ marginBottom: "10px" }}
            type="text"
            class="input-res"
            onChange={(e) => {
              console.log(e.target.value);
              let filterArtical = [];
              this.state.searchArtical.forEach(function (doc) {
                if (
                  doc.desc
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                  doc.title.toLowerCase().includes(e.target.value.toLowerCase())
                ) {
                  const artical = {
                    ...doc,
                  };
                  filterArtical.push(artical);
                }
              });
              this.setState({
                academicData: filterArtical,
              });
            }}
          /> */}
          </div>
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
