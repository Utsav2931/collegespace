import classes from "../AddThings.module.css";
import React, { Component } from "react";
import BasicPadding from "../../../components/UI/BasicCompPadding/BasicLayout";
import Textfield from "../../../components/UI/TextFormField/Textfield";
import firebase from "../../../config/config";

var currentdate = new Date();
const db = firebase.firestore();
const storageRef = firebase.storage();
export class AddNotes extends Component {
  state = {
    article: {
      title: "",
      desc: "",
      createDate: currentdate,
      image: "",
      categoryLable: "",
      id: "",
      link: "",
      college: "",
      department: "",
      semester: "",
      subject: "",
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
        .collection("notes").doc(id)
        .set(article)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  uploadImageCallBack = (e) => {
    const promises = e.map((file) => {
      const ref = firebase
        .storage()
        .ref()
        .child(`post/image/${file.data.name}`);
      return ref.put(file.uploadTask).then(() => ref.getDownloadURL());
    });

    console.log(promises);
    Promise.all(promises)
      .then((fileDownloadUrls) => {
        this.setState({
          article: {
            ...this.state.article,
            image: fileDownloadUrls,
          },
        });
        // db
        // .collection("properties")
        // .add({
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //     title: title,
        //     description: description,
        //     pictures: fileDownloadUrls,
        //     user: user.uid
        // })
      })
      .catch((err) => console.log(err));

    // return new Promise((resolve, reject) => {
    //   const file = e.target.files[0];
    //   const fileName = uuidv4();
    //   storageRef
    //     .ref()
    //     .child("Articles/" + fileName)
    //     .put(file)
    //     .then(async (snapshot) => {
    //       const downloadURL = await storageRef
    //         .ref()
    //         .child("Articles/" + fileName)
    //         .getDownloadURL();
    //       console.log(downloadURL);
    //       resolve({
    //         success: true,
    //         data: { link: downloadURL },
    //       });
    //     });
    // });
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

  // submitPost = () => {
  //   let id = this.state.article.title;
  //   const article = this.state.article;
  //   id = id.split(" ").join("-");
  //   article.id = id;
  //   console.log(id);
  //   db.collection("Posts")
  //     .doc(id)
  //     .set(article)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
            {/* <Textfield
              onChange={(e) => this.onChangeArticleLink(e.target.value)}
              title="Link"
            /> */}
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
            </select>
            <button
              onClick={(e) => this.handleValidation(e)}
              className={classes.cardbutton}
            >
              Submit
            </button>
          </div>
          {/* <div className={classes.img}>
            <DropZone 
            state = {this.state.article}
            onChange={async (e) => {
              const uploadState = await this.uploadImageCallBack(e);
              if (uploadState.success) {
                console.log("In Upload Success State");
                console.log(uploadState.data.link);
                this.setState({
                  hasFeatureIamge: true,
                  article: {
                    ...this.state.article,
                    image: uploadState.data.link,
                  },
                });
              }
            }}

            />
          </div> */}
          <div className={classes.drag_area}>
            <div className={classes.icon}>
              <i class="fas fa-cloud-upload-alt"></i>
            </div>
            <header>Drag and Drop to Upload File</header>
            <span>OR</span>
            <button>Browse File</button>
            <input
              type="file"
              onChange={async (e) => {
                const uploadState = await this.uploadImageCallBack(e);
                if (uploadState.success) {
                  console.log("In Upload Success State");
                  console.log(uploadState.data.link);
                  // this.setState({
                  //   hasFeatureIamge: true,
                  //   article: {
                  //     ...this.state.article,
                  //     image: uploadState.data.link,
                  //   },
                  // });
                }
              }}
              hidden
            ></input>
          </div>
        </div>
      </BasicPadding>
    );
  }
}

export default AddNotes;
