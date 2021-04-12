import classes from "../AddPosts/AddPosts.module.css";
import React, { Component } from "react";
import BasicPadding from "../../../components/UI/BasicCompPadding/BasicLayout";
import Textfield from "../../../components/UI/TextFormField/Textfield";
import firebase from "../../../config/config";
import { v4 as uuidv4 } from "uuid";

var currentdate = new Date();
const db = firebase.firestore();
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
  };

  handleValidation() {
    const { title, desc, image, categoryLable, link } = this.state;

    // only each block with generate error
    if (desc == "") {
      this.setState({
        error: "DESC is not null",
      });
    } else if (title == "") {
      this.setState({ error: "title is not valid" });
    } else if (categoryLable == "") {
      this.setState({ error: "category is not valid" });
    } else if (link == "") {
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
    this.setState({
      article: {
        ...this.state.article,
        semester: value,
      },
    });
    console.log(this.state.article);
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
                Label
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
                Label
              </option>
              <option name="ce">ce</option>
              <option name="it">it</option>
            </select>

            <label className={classes.label}>Semester</label>
            <select
              className={classes.select}
              onChange={(e) => this.onChangeSem(e.target.value)}
            >
              <option value="" disabled selected>
                Label
              </option>
              <option name="1">1</option>
              <option name="2">2</option>
              <option name="3">3</option>
            </select>

            <label className={classes.label}>Subject</label>
            <select
              className={classes.select}
              onChange={(e) => this.onChangeSub(e.target.value)}
            >
              <option value="" disabled selected>
                Label
              </option>
              <option name="BEEE">BEEE</option>
              <option name="Cprogramming">Cprogramming</option>
              <option name="EE">EE</option>
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
            <header><h3>Select pdf file to Upload</h3></header>
            <br></br><br></br>

           
            <input className={classes.filechossen}
            
              type="file" accept="application/pdf"
              onChange={async (e) => {
                const uploadState = await this.uploadImageCallBack(e);
                if (uploadState.success) {
                  console.log("In Upload Success State");
                  alert("Your pdf has been successfully uploaded 👍, click on submit button to make your notes visible");
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
