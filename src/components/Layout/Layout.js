import React, { Component } from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/AAux";
import NavBar from "../Navigation/Navbar";
import Modal from "../UI/Modal/Modal";
import Textfield from "../UI/TextFormField/Textfield";
import Checkbox from "../UI/CheckBox/Checkbox";
import ContentBuilder from "../../containers/ContentBuilder/ContentBuilder";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      college: "cspit",
      department: "ce",
      semester: "1",
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // handleChange = (collegeName) => {
  //   this.setState({
  //     college: collegeName,
  //   });
  //   console.log(this.state.college);
  // };

  handleFormSubmit = () => {
    const { college, department, semester } = this.state;
    // localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("college", college ? college : "");
    localStorage.setItem("department", department ? department : "");
    localStorage.setItem("semester", semester ? semester : "");
    this.setState({ show: false });
  };

  componentDidMount() {
    const college = localStorage.getItem("college");
    const department = localStorage.getItem("department");
    const semester = localStorage.getItem("semester");
    this.setState({ college, department, semester });
  }

  OnchangeValueCollege = (event) => {
    this.setState({
      college: event,
    });
    console.log(this.state.college);
  };

  OnchangeValueDepartment = (event) => {
    this.setState({
      department: event,
    });
    console.log(this.state.department);
  };

  OnchangeValueSemester = (event) => {
    this.setState({
      semester: event,
    });
    console.log(this.state.semester);
  };

  render() {
    return (
      <Aux>
        <NavBar
          onclick={() => this.showModal()}
          college={this.state.college}
          department={this.state.department}
          semester={this.state.semester}
          show={this.state.show}
        />
        <main className={classes.Content}>
          <ContentBuilder
            college={this.state.college}
            department={this.state.department}
            semester={this.state.semester}
          />
          {/* {this.props.children} */}
        </main>{" "}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {/* ================================================== */}

          <div className={classes.outerdiv}>
            <legend className={classes.lable}>College</legend>
            <div className={classes.collegeSelection}>
              <Checkbox
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
              />
            </div>
            {/* -------------------------------- */}
            <legend className={classes.lable}>Department</legend>
            <div className={classes.collegeSelection}>
              <Checkbox
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
              />
            </div>
            {/* -------------------------------- */}
            <legend className={classes.lable}>Semester</legend>
            <div className={classes.collegeSelection}>
              <Checkbox
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
              />
            </div>
            <button
              className={classes.buttonStyle}
              type="button"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </Modal>
        {/* <button type="button" onClick={this.showModal}>
          Open
        </button> */}
      </Aux>
    );
  }
}

export default Layout;
