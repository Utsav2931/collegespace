import React, { Component } from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/AAux";
import NavBar from "../Navigation/Navbar";
import Modal from "../UI/Modal/Modal";
import Checkbox from "../UI/CheckBox/Checkbox";
import ContentBuilder from "../../containers/ContentBuilder/ContentBuilder";
// import ThemeContextProvider from "../UI/DarkMode/ThemeContext";
import {ThemeContext} from "../UI/DarkMode/ThemeContext";

// Main layout for the whole website

var college = [
  {
    title: "CSPIT",
    value: "cspit",
    name: "college",
    id: "c1",
  },
  {
    title: "DEPSTAR",
    value: "depstar",
    name: "college",
    id: "c2",
  },
];
var deptCE = [
  {
    title: "Computer Engineering",
    name: "department",
    value: "ce",
    id: "d1",
  },
  {
    title: "Information Technology",
    value: "it",
    name: "department",
    id: "d2",
  },
  {
    title: "Electronics & Communication",
    value: "ec",
    name: "department",
    id: "d3",
  },
];

var deptDep = [
  {
    title: "Computer Engineering",
    name: "department",
    value: "ce",
    id: "d4",
  },
  {
    title: "Information Technology",
    value: "it",
    name: "department",
    id: "d5",
  },
  {
    title: "Computer Science",
    value: "cs",
    name: "department",
    id: "d6",
  },
];

var sem = [
  {
    title: "6",
    name: "semester",
    value: "6",
    id: "s6",
  },
  {
    title: "7",
    name: "semester",
    value: "7",
    id: "s7",
  },
];

class Layout extends Component {

  static contextType = ThemeContext;

  constructor() {
    super();
    this.state = {
      show: false,
      college: "x",
      department: "y",
      semester: "z",
      dept: [],
      semt: [],
      clgName: "",
      deptName: "",
      semName: "",
    };
  }

  // shows path select screen
  showModal = () => {
    this.setState({ show: true });
  };

  // Hide path select screen
  hideModal = () => {
    if (
      document.querySelector('input[name="college"]:checked') &&
      document.querySelector('input[name="department"]:checked') &&
      document.querySelector('input[name="semester"]:checked')
    ) {
      this.setState({
        show: false,
        clgName: this.state.college,
        semName: this.state.semester,
        deptName: this.state.department,
      });
    } else {
      alert("please select all the fields");
    }
  };

  // Store the data in browser (Loacal Storage)
  handleFormSubmit = () => {
    if (
      document.querySelector('input[name="college"]:checked') &&
      document.querySelector('input[name="department"]:checked') &&
      document.querySelector('input[name="semester"]:checked')
    ) {
      this.updateDept(this.state.college);
      const { clgName, deptName, semName } = this.state;
      localStorage.setItem("college", clgName ? clgName : "");
      localStorage.setItem("department", deptName ? deptName : "");
      localStorage.setItem("semester", semName ? semName : "");
      this.setState({ show: false });
      this.setState({
        college: this.state.clgName,
        semester: this.state.semName,
        department: this.state.deptName,
      });
      window.location = "/";
    } else {
      // this.setState({clgName:this.state.college})
      alert("please select all the field");
    }
    // this.updateDept(this.state.college)
    // const { college, department, semester } = this.state;
    // localStorage.setItem("college", college ? college : "");
    // localStorage.setItem("department", department ? department : "");
    // localStorage.setItem("semester", semester ? semester : "");
    // this.setState({ show: false });

    // window.location = "/";
  };

  //for mountaing the selected data with variables
  componentDidMount() {
    this.updateDept(localStorage.getItem("college"));
    this.updateSem(localStorage.getItem("department"));
    const clgName = localStorage.getItem("college");
    const deptName = localStorage.getItem("department");
    const semName = localStorage.getItem("semester");
    const college = clgName;
    const department = deptName;
    const semester = semName;
    this.setState({
      college,
      department,
      semester,
      clgName,
      deptName,
      semName,
    });
  }

  updateDept = (event) => {
    if (event == "cspit") {
      this.setState({
        dept: deptCE,
      });
    } else if (event == "depstar") {
      this.setState({
        dept: deptDep,
      });
    }
  };
  //for updating college value if user change it
  OnchangeValueCollege = (event) => {
    this.setState({
      clgName: event,
    });
    this.updateDept(event);
  };

  updateSem = (event) => {
    if (event == "ce" || event == "ec" || event == "it" || event == "cs")
      this.setState({
        semt: sem,
      });
  };
  //for updating department value if user change it
  OnchangeValueDepartment = (event) => {
    this.setState({
      deptName: event,
    });
    this.updateSem(event);
  };

  //for updating semester value if user change it
  OnchangeValueSemester = (event) => {
    this.setState({
      semName: event, //6
    });
  };

  // For render the UI
  render() {
    const {theme} = this.context;
    return (
      <>
        {/* navigation Bar on top of the screen which is fixed */}
        <NavBar
          onclick={() => this.showModal()}
          college={this.state.college}
          department={this.state.department}
          semester={this.state.semester}
          show={this.state.show}
          // theme={this.props.theme}
          // toggleTheme={this.props.toggleTheme}
        />
        {/* Main content under the Navbar */}
        <main
          className={
            classes.Content +
            (theme === "light" ? "" : " " + classes.contentDark)
          }
        >
          <ContentBuilder
            onclick={() => this.showModal()}
            college={this.state.college}
            department={this.state.department}
            semester={this.state.semester}
            theme={theme}
          />
        </main>{" "}
        {/* This modal display the layout to choose path(Branch name, department etc.) */}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className={classes.outerdiv}>
            {/* College selection */}
            <legend className={classes.lable}>College</legend>
            <div className={classes.collegeSelection}>
              {college.map((e) => (
                <Checkbox
                  title={e.title}
                  value={e.value}
                  name={e.name}
                  checked={this.state.clgName}
                  id={e.id}
                  OnchageValue={(e) =>
                    this.OnchangeValueCollege(e.target.value)
                  }
                />
              ))}
            </div>

            {/* Department selection */}
            {this.state.dept[0] == null ? (
              <div />
            ) : (
              <legend className={classes.lable}>Department</legend>
            )}
            <div className={classes.collegeSelection}>
              {this.state.dept ? (
                this.state.dept.map((e) => (
                  <Checkbox
                    title={e.title}
                    name={e.name}
                    value={e.value}
                    checked={this.state.deptName}
                    id={e.id}
                    OnchageValue={(e) =>
                      this.OnchangeValueDepartment(e.target.value)
                    }
                  />
                ))
              ) : (
                <div />
              )}
            </div>
            {/* Semester selection */}
            {this.state.semt[0] == null ? (
              <div />
            ) : (
              <legend className={classes.lable}>Semester</legend>
            )}
            <div className={classes.collegeSelection}>
              {this.state.semt ? (
                this.state.semt.map((e) => (
                  <Checkbox
                    title={e.title}
                    name={e.name}
                    value={e.value}
                    checked={this.state.semName}
                    id={e.id}
                    OnchageValue={(e) =>
                      this.OnchangeValueSemester(e.target.value)
                    }
                  />
                ))
              ) : (
                <div />
              )}
            </div>
            {/* Submit button */}
            <button
              className={classes.buttonStyle}
              type="button"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default Layout;
