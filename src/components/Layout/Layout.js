import React, { Component } from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/AAux";
import NavBar from "../Navigation/Navbar";
import Modal from "../UI/Modal/Modal";
import Checkbox from "../UI/CheckBox/Checkbox";
import ContentBuilder from "../../containers/ContentBuilder/ContentBuilder";

// Main layout for the whole website

var college = [{
  title: "CSPIT",
  value: "cspit",
  name: "college",
  id: "c1"
}, {
  title: "DEPSTAR",
  value: "depstar",
  name: "college",
  id: "c2"
}]
var deptCE = [
  {
    title: "Computer Engineering",
    name: "department",
    value: "ce",
    id: "d1",
  }, {
    title: "Information Technology",
    value: "it",
    name: "department",
    id: "d2"
  },
  {
    title: "Electronics & Communication",
    value: "ec",
    name: "department",
    id: "d3"
  }
]

var deptDep = [
  {
    title: "Computer Engineering",
    name: "department",
    value: "ce",
    id: "d4",
  }, {
    title: "Information Technology",
    value: "it",
    name: "department",
    id: "d5"
  },
  {
    title: "Computer Science",
    value: "cs",
    name: "department",
    id: "d6"
  }
]

var sem = [
  {
    title: "6",
    name: "semester",
    value: "6",
    id: "s6",
  },
]

class Layout extends Component {
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
    if (document.querySelector('input[name="college"]:checked') &&
      document.querySelector('input[name="department"]:checked') &&
      document.querySelector('input[name="semester"]:checked')) {
      this.setState({
        show: false, clgName: this.state.college,
        semName: this.state.semester,
        deptName: this.state.department
      });
    } else {
      alert("please select all the fields")
    }
  };

  // Store the data in browser (Loacal Storage)
  handleFormSubmit = () => {
    if (document.querySelector('input[name="college"]:checked') &&
      document.querySelector('input[name="department"]:checked') &&
      document.querySelector('input[name="semester"]:checked')) {
      console.log(true)
      this.updateDept(this.state.college)
      const { clgName, deptName, semName } = this.state;
      localStorage.setItem("college", clgName ? clgName : "");
      localStorage.setItem("department", deptName ? deptName : "");
      localStorage.setItem("semester", semName ? semName : "");
      this.setState({ show: false });
      this.setState({
        college: this.state.clgName,
        semester: this.state.semName,
        department: this.state.deptName
      })
      window.location = "/";
    }
    else {
      console.log(false)
      // this.setState({clgName:this.state.college})
      alert('please select all the field')
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
    this.updateDept(localStorage.getItem("college"))
    this.updateSem(localStorage.getItem("department"))
    const clgName = localStorage.getItem("college");
    const deptName = localStorage.getItem("department");
    const semName = localStorage.getItem("semester");
    const college = clgName
    const department = deptName
    const semester = semName
    this.setState({ college, department, semester, clgName, deptName, semName });
  }

  updateDept = (event) => {

    if (event == "cspit") {
      this.setState({
        dept: deptCE
      })
    }
    else if (event == "depstar") {
      this.setState({
        dept: deptDep
      })
    }
    console.log("inside updateDept " + this.state.dept)
  }
  //for updating college value if user change it
  OnchangeValueCollege = (event) => {
    this.setState({
      clgName: event,
    });
    this.updateDept(event)
  };

  updateSem = (event) => {
    if (event == "ce" || event == "ec" || event == "it" || event == "cs")
      this.setState({
        semt: sem
      })
  }
  //for updating department value if user change it
  OnchangeValueDepartment = (event) => {
    this.setState({
      deptName: event,
    });
    this.updateSem(event)
  };

  //for updating semester value if user change it
  OnchangeValueSemester = (event) => {
    this.setState({
      semName: event,//6
    });
  };

  // For render the UI
  render() {
    return (
      <Aux>
        {/* navigation Bar on top of the screen which is fixed */}
        <NavBar
          onclick={() => this.showModal()}
          college={this.state.college}
          department={this.state.department}
          semester={this.state.semester}
          show={this.state.show}
        />
        {/* Main content under the Navbar */}
        <main className={classes.Content}>
          <ContentBuilder
            onclick={() => this.showModal()}
            college={this.state.college}
            department={this.state.department}
            semester={this.state.semester}
          />
        </main>{" "}
        {/* This modal display the layout to choose path(Branch name, department etc.) */}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className={classes.outerdiv}>
            {/* College selection */}
            <legend className={classes.lable}>College</legend>
            <div className={classes.collegeSelection}>
              {
                college.map(e =>
                  <Checkbox
                    title={e.title}
                    value={e.value}
                    name={e.name}
                    checked={this.state.clgName}
                    id={e.id}
                    OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
                  />
                )
              }
              {/* <Checkbox
                title="CSPIT"
                value="cspit"
                name="college"
                checked={this.state.college}
                id="c1"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              />
              <Checkbox
                title="depstar"
                name="college"
                value="depstar"
                checked={this.state.college}
                id="c2"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              />
              <Checkbox
                title="I2IM"
                name="college"
                value="i2im"
                checked={this.state.college}
                id="c3"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              />
              <Checkbox
                title="RPCP"
                name="college"
                value="rpcp"
                checked={this.state.college}
                id="c4"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              />
              <Checkbox
                title="CMPICA"
                name="college"
                value="cmpica"
                checked={this.state.college}
                id="c5"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              />
              <Checkbox
                title="PDPIAS"
                name="college"
                value="pdpias"
                checked={this.state.college}
                id="c6"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              />
              <Checkbox
                title="ARIP"
                name="college"
                value="arip"
                checked={this.state.college}
                id="c7"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              />
              <Checkbox
                title="MTIN"
                name="college"
                value="mtin"
                checked={this.state.college}
                id="c8"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              />
              <Checkbox
                title="CIPS"
                name="college"
                value="cips"
                checked={this.state.college}
                id="c8"
                OnchageValue={(e) => this.OnchangeValueCollege(e.target.value)}
              /> */}
            </div>

            {/* Department selection */}
            {this.state.dept[0] == null ? <div /> : <legend className={classes.lable}>Department</legend>}
            <div className={classes.collegeSelection}>
              {
                this.state.dept ? this.state.dept.map(e =>
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
                ) : <div />}
              {/* <Checkbox
                title="Computer Engineering"
                name="department"
                value="ce"
                checked={this.state.department}
                id="d1"
                OnchageValue={(e) =>
                  this.OnchangeValueDepartment(e.target.value)
                }
              />
              <Checkbox
                title="Information Technology"
                name="department"
                value="it"
                checked={this.state.department}
                id="d2"
                OnchageValue={(e) =>
                  this.OnchangeValueDepartment(e.target.value)
                }
              />
              <Checkbox
                title="Computer Science"
                name="department"
                checked={this.state.department}
                value="cs"
                id="d3"
                OnchageValue={(e) =>
                  this.OnchangeValueDepartment(e.target.value)
                }
              />
              <Checkbox
                title="Electronics & Comm"
                name="department"
                checked={this.state.department}
                value="ec"
                id="d4"
                OnchageValue={(e) =>
                  this.OnchangeValueDepartment(e.target.value)
                }
              />
              <Checkbox
                title="Civil Engineering"
                name="department"
                checked={this.state.department}
                value="cv"
                id="d5"
                OnchageValue={(e) =>
                  this.OnchangeValueDepartment(e.target.value)
                }
              />
              <Checkbox
                title="Mechanical Engineering"
                name="department"
                checked={this.state.department}
                value="mech"
                id="d6"
                OnchageValue={(e) =>
                  this.OnchangeValueDepartment(e.target.value)
                }
              />
              <Checkbox
                title="Electrical Engineering"
                name="department"
                checked={this.state.department}
                value="ee"
                id="d7"
                OnchageValue={(e) =>
                  this.OnchangeValueDepartment(e.target.value)
                }
              /> */}
            </div>
            {/* Semester selection */}
            {this.state.semt[0] == null ? <div /> : <legend className={classes.lable}>Semester</legend>}
            <div className={classes.collegeSelection}>
              {
                this.state.semt ? this.state.semt.map(e =>
                  <Checkbox
                    title={e.title}
                    name={e.name}
                    value={e.value}
                    checked={this.state.semName}
                    id={e.id}
                    OnchageValue={(e) =>
                      this.OnchangeValueSemester(e.target.value)
                    }
                  />) : <div />
                /* {sem.map(e =>
                <Checkbox
                  title={e.title}
                  name={e.name}
                  value={e.value}
                  checked={this.state.department}
                  id={e.id}
                  OnchageValue={(e) =>
                    this.OnchangeValueDepartment(e.target.value)
                  }
                />
              )} */}
              {/* {this.state.semester?this.state.semester.map(e => <Checkbox
                title={e.title}
                name={e.name}
                value={e.value}
                checked={this.state.semester}
                id={e.value}
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              />):<div/>} */}
              {/* <Checkbox
                title="1"
                name="semester"
                value="1"
                checked={this.state.semester}
                id="s1"
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              />
              <Checkbox
                title="2"
                name="semester"
                value="2"
                checked={this.state.semester}
                id="s2"
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              />
              <Checkbox
                title="3"
                name="semester"
                checked={this.state.semester}
                value="3"
                id="s3"
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              />
              <Checkbox
                title="4"
                name="semester"
                checked={this.state.semester}
                value="4"
                id="s4"
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              />
              <Checkbox
                title="5"
                name="semester"
                checked={this.state.semester}
                value="5"
                id="s5"
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              />
              <Checkbox
                title="6"
                name="semester"
                checked={this.state.semester}
                value="6"
                id="s6"
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              />
              <Checkbox
                title="7"
                name="semester"
                checked={this.state.semester}
                value="7"
                id="s7"
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              />
              <Checkbox
                title="8"
                name="semester"
                checked={this.state.semester}
                value="8"
                id="s8"
                OnchageValue={(e) => this.OnchangeValueSemester(e.target.value)}
              /> */}
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
      </Aux>
    );
  }
}

export default Layout;
