import classes from "../AddPosts/AddPosts.module.css";
import React, { Component } from "react";
import BasicPadding from "../../../components/UI/BasicCompPadding/BasicLayout";
import Textfield from "../../../components/UI/TextFormField/Textfield";
import firebase from "../../../config/config";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../../components/UI/Loader/Loader";
import GeneralModal from "../../../components/UI/GeneralModal/GeneralModal";
const deptce = ["ce", "it", "mech", "civil", "ec"];
const deptdep = ["ce", "cse", "it"];
var currentdate = new Date();
const db = firebase.firestore();
const subject = ["toc", "dwdm", "ins", "ios", "pip"];
const storageRef = firebase.storage();

var file = {};
export class AddNotes extends Component {
  constructor(props) {
    // console.log(props.college);
    super(props);
    this.state = {
      article: {
        title: "",
        desc: "",
        createDate: currentdate,
        categoryLable: "",
        id: "",
        link: "",
        college: props.college,
        department: "",
        semester: "",
        subject: "",
        author: "",
      },
      error: "",
      opt: [1, 2, 3, 4, 5, 6, 7, 8],
      dept: [],
      sub: [],
      loaderDisplay: false,
    };
  }

  uploadImageCallBack = () => {
    return new Promise(async (resolve, reject) => {
      // file = e.target.files[0];
      const filename = file.name;
      // uuidv4();
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

  callbk = () => {
    return new Promise(async (resolve, reject) => {
      const uploadState = await this.uploadImageCallBack();
      if (uploadState.success) {
        console.log("In Upload Success State");
        // alert(
        //   "Your pdf has been successfully uploaded 👍, click on submit button to make your notes visible"
        // );
        console.log(uploadState.data.link);
        this.setState({
          hasFeatureIamge: true,
          article: {
            ...this.state.article,
            link: uploadState.data.link,
          },
        });
      }
      resolve({ success: true });
    });
  };

  handleValidation() {
    return new Promise(async (resolve, reject) => {
      const {
        title,
        desc,
        image,
        semester,
        subject,
        department,
        college,
        link,
        author,
      } = this.state.article;

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
      } else if (department == "") {
        this.setState({ error: "department is not valid" });
      } else if (college == "") {
        this.setState({ error: "college is not valid" });
      } else {
        this.setState({
          loaderDisplay: true,
        });
        await this.callbk();
        if (link == "") {
          this.setState({ error: "Adding pdf is Mandatory!" });
        }
        this.uploadNotes();
      }
    });
  }

  uploadNotes = () => {
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
        file = "";
        this.setState({
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
          sub: [],
          loaderDisplay: false,
        });
        console.log(res);
        alert("Your notes has been successfully uploaded 👍");
      })
      .catch((err) => console.log(err));
  };

  addImageToFile = (e) => {
    file = e.target.files[0];
    this.setState({});
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
      console.log(value + " " + subject);
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
    console.log(file);
    return (
      <BasicPadding>
       
        {this.state.loaderDisplay ? (
          <GeneralModal>
            <Loader />
          </GeneralModal>
        ) : (
          <div></div>
        )}
        {this.state.error !== "" ? (
          <span style={{ color: "red" }}>{this.state.error}</span>
        ) : (
          ""
        )}
        <h1>Add Notes</h1>
        <div className={classes.col}>
          <div className={classes.basicInput}>
            <Textfield
              value={this.state.article.title}
              onChange={(e) => this.onChangeArticleTitle(e.target.value)}
              title="Title"
            />
            <Textfield
              value={this.state.article.desc}
              onChange={(e) => this.onChangeArticleDesc(e.target.value)}
              title="Description"
            />
            <Textfield
              value={this.state.article.author}
              onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
              title="Author"
            />
            <label className={classes.label}>College</label>
            <select
              value={this.state.article.college}
              className={classes.select}
              onChange={(e) => this.onChangeCollege(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option name="cspit">cspit</option>
              <option name="depstar">depstar</option>
            </select>

            <label className={classes.label}>Department</label>
            <select
              value={this.state.article.department}
              className={classes.select}
              onChange={(e) => this.onChangeDep(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {this.state.dept.map((e) => {
                return <option name={e}>{e}</option>;
              })}
              {/* <option name="ce">ce</option>
              <option name="it">it</option> */}
            </select>

            <label className={classes.label}>Semester</label>
            <select
              value={this.state.article.semester}
              className={classes.select}
              onChange={(e) => this.onChangeSem(e.target.value)}
            >
              <option value="" disabled selected>
                Select
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
              value={this.state.article.subject}
              className={classes.select}
              onChange={(e) => this.onChangeSub(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {this.state.sub.map((e) => {
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
              Upload notes
            </label>

            <input
              className={classes.filechossen}
              id="fileImage"
              type="file"
              // accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              // accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              // text/plain, application/pdf, image/*  "

              // accept=".doc,.docx,application/msword,application/pdf"
              onChange={(e) => {
                this.addImageToFile(e);
                // const uploadState = await this.addImageToFile(e);
                // if (uploadState.success) {
                //   console.log("In Upload Success State");
                //   alert(
                //     "Your pdf has been successfully uploaded 👍, click on submit button to make your notes visible"
                //   );
                //   console.log(uploadState.data.link);
                //   this.setState({
                //     hasFeatureIamge: true,
                //     article: {
                //       ...this.state.article,
                //       link: uploadState.data.link,
                //     },
                //   });
                // }
              }}
            ></input>
            <div>{file.name}</div>
          </div>
        </div>
      </BasicPadding>
    );
  }
}

export default AddNotes;
