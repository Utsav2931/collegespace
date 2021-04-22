import classes from "../AddPosts/AddPosts.module.css";
import React, { Component } from "react";
import BasicPadding from "../../../components/UI/BasicCompPadding/BasicLayout";
import Textfield from "../../../components/UI/TextFormField/Textfield";
import firebase from "../../../config/config";
import { v4 as uuidv4 } from "uuid";

const deptce = ["ce", "it", "mech", "civil", "ec"];
const deptdep = ["ce", "cse", "it"];
var currentdate = new Date();
const db = firebase.firestore();
const subject = ["toc", "dwdm", "ins", "ios", "pip"]
const storageRef = firebase.storage();
export class AddNotes extends Component {
 
  state = {
    article: {
      title: "",
      desc: "",
      createDate: currentdate,
      categoryLable: "",
      id: "",
      link: "",
      college: "",
      department: "",
      semester: "",
      subject: "",
      author: "",
    },
    error: "",
    opt: [1, 2, 3, 4, 5, 6, 7, 8],
    dept: [],
    sub: []
  };

  handleValidation() {
    const { title, desc, image, semester, subject, department, college,  link, author } = this.state.article;

    // only each block with generate error
    if (desc == "") {
      this.setState({
        error: "DESC is not valid",
      });
    } else if (title == "") {
      this.setState({ error: "title is not valid" });
    } else if (author == "") {
      this.setState({ error: "Author is not valid" });
    } else if (semester == "") {
      this.setState({ error: "semester is not valid" });
    } else if (subject == "") {
      this.setState({ error: "subject is not valid" });
    }
    else if (department == "") {
      this.setState({ error: "department is not valid" });
    }
    else if (college == "") {
      this.setState({ error: "college is not valid" });
    }else if (link == "") {
      this.setState({ error: "link is not valid" });
    } else {
      this.setState({ error: "" });
      let id = this.state.article.title;
      const article = this.state.article;
      id = id.split(" ").join("-");
      article.id = id;
      console.log(id);
      db.collection("academics")
        .doc(this.state.article.college)
        .collection("department")
        .doc(this.state.article.department)
        .collection("sem")
        .doc(this.state.article.semester)
        .collection("subjects")
        .doc(this.state.article.subject)
        .collection("notes")
        .doc(id)
        .set(article)
        .then((res) => {
          console.log(res);
          alert("Your notes has been successfully uploaded 👍");
        })
        .catch((err) => console.log(err));
    }
  }

  uploadImageCallBack = (e) => {
    return new Promise(async (resolve, reject) => {
      const file = e.target.files[0];
      const filename = uuidv4();
      storageRef
        .ref()
        .child("pdf/" + filename)
        .put(file)
        .then(async (snapshot) => {
          const downloadURL = await storageRef
            .ref()
            .child("pdf/" + filename)
            .getDownloadURL();
          console.log(downloadURL);
          resolve({
            success: true,
            data: { link: downloadURL },
          });
        });
    });
  };

  onChangeArticleTitle = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        title: value,
      },
    });
    // console.log(this.state.article);
  };
  onChangeArticleDesc = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        desc: value,
      },
    });
    // console.log(this.state.article);
  };

  onChangeArticleAuthor = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        author: value,
      },
    });
    // console.log(this.state.article);
  };
  onChangeArticleLink = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        link: value,
      },
    });
    // console.log(this.state.article);
  };

  onChangeCollege = (value) => {
    if (value == "cspit") {
      this.setState({
        dept: deptce,
      });
      console.log("dept:" + this.state.dept);
    } else if (value == "depstar") {
      this.setState({
        dept: deptdep,
      });
    }

    this.setState({
      article: {
        ...this.state.article,
        college: value,
      },
    });
    console.log(this.state.article);
  };

  onChangeDep = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        department: value,
      },
    });
    console.log(this.state.article);
  };

  onChangeSem = (value) => {
    if (value == 6) {
      this.setState({
        sub: subject,
      });
      console.log(value + " " + subject)
    }

    this.setState({
      article: {
        ...this.state.article,
        semester: value,
        //  sub: subject,
      },
    });
    console.log(this.state.sub);
  };

  onChangeSub = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        subject: value,
      },
    });
    console.log(this.state.article);
  };

  render() {
    return (
      <BasicPadding>
        {this.state.error !== "" ? (
          <span style={{ color: "red" }}>{this.state.error}</span>
        ) : (
          ""
        )}
        <h1>Add Notes</h1>
        <div className={classes.col}>
          <div className={classes.basicInput}>
            <Textfield
              onChange={(e) => this.onChangeArticleTitle(e.target.value)}
              title="Title"
            />
            <Textfield
              onChange={(e) => this.onChangeArticleDesc(e.target.value)}
              title="Description"
            />
            <Textfield
              onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
              title="Author"
            />
            <label className={classes.label}>College</label>
            <select
              className={classes.select}
              onChange={(e) => this.onChangeCollege(e.target.value)}
            >
              <option value="" disabled selected>
                College
              </option>
              <option name="cspit">cspit</option>
              <option name="depstar">depstar</option>
            </select>

            <label className={classes.label}>Department</label>
            <select
              className={classes.select}
              onChange={(e) => this.onChangeDep(e.target.value)}
            >
              <option value="" disabled selected>
                Department
              </option>
              {this.state.dept.map((e) => {
                return <option name={e}>{e}</option>;
              })}
              {/* <option name="ce">ce</option>
              <option name="it">it</option> */}
            </select>

            <label className={classes.label}>Semester</label>
            <select
              className={classes.select}
              onChange={(e) => this.onChangeSem(e.target.value)}
            >
              <option value="" disabled selected>
                Semester
              </option>
              {this.state.opt.map((e) => {
                return <option name={e}>{e}</option>;
              })}
              {/* <option name="1">1</option>
              <option name="2">2</option>
              <option name="3">3</option> */}
            </select>

            <label className={classes.label}>Subject</label>
            <select
              className={classes.select}
              onChange={(e) => this.onChangeSub(e.target.value)}
            >
              <option value="" disabled selected>
                Subject
              </option>{this.state.sub.map((e) => {
                return <option name={e}>{e}</option>;
              })}
            </select>
            <button
              onClick={(e) => this.handleValidation(e)}
              className={classes.cardbutton}
            >
              Submit
            </button>
          </div>

          <div className={classes.drag_area}>
            <div className={classes.icon}>
              <i class="fas fa-cloud-upload-alt"></i>
            </div>
            <header>Select pdf file to Upload</header>
            {/* <br></br><br></br> */}

            <label for="fileImage" className={classes.btn}>
              Upload Image
            </label>

            <input
              className={classes.filechossen}
              id="fileImage"
              type="file"
              accept="application/pdf"
              onChange={async (e) => {
                const uploadState = await this.uploadImageCallBack(e);
                if (uploadState.success) {
                  console.log("In Upload Success State");
                  alert(
                    "Your pdf has been successfully uploaded 👍, click on submit button to make your notes visible"
                  );
                  console.log(uploadState.data.link);
                  this.setState({
                    hasFeatureIamge: true,
                    article: {
                      ...this.state.article,
                      link: uploadState.data.link,
                    },
                  });
                }
              }}
            ></input>
          </div>
        </div>
      </BasicPadding>
    );
  }
}

export default AddNotes;
