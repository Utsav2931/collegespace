import classes from "./AddThings.module.css";
import React, { Component } from "react";
import BasicPadding from "../../components/UI/BasicCompPadding/BasicLayout";
import Textfield from "../../components/UI/TextFormField/Textfield";
import firebase from "../../config/config";
import { v4 as uuidv4 } from 'uuid'

var index = 0;

var currentdate = new Date();
const db = firebase.firestore();
const storageRef = firebase.storage();
export class Add extends Component {
  state = {
    article: {
      title: "",
      desc: "",
      createDate: currentdate,
      // author: "HowdyArsh",
      image: [],
      categoryLable: "",
      id: "",
      link: "",
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
      db.collection("Posts")
        .doc(id)
        .set(article)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  uploadImageCallBack = (e) => {
    return new Promise(async (resolve, reject) => {
      const file = e.target.files[index]
      index++
      const filename = uuidv4()
      storageRef.ref().child("post/image/" + filename).put(file).then(async snapshot => {
        const downloadURL = await storageRef.ref().child("post/image/" + filename).getDownloadURL()
        console.log(downloadURL)
        resolve({
          success: true,
          data: { link: downloadURL }
        })
      })
    })
  }

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

  onChangeArticlecategory = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        categoryLable: value,
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
    index = 0;
    return (
      <BasicPadding>
        {this.state.error !== "" ? (
          <span style={{ color: "red" }}>{this.state.error}</span>
        ) : (
          ""
        )}
        <h1>Make Post</h1>
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
              onChange={(e) => this.onChangeArticleLink(e.target.value)}
              title="Link"
            />
            <label className={classes.label}>Category</label>
            <select
              className={classes.select}
              onChange={(e) => this.onChangeArticlecategory(e.target.value)}
            >
              <option value="" disabled selected>
                Label
              </option>
              <option name="education">Education</option>
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

            <input
              type="file"
              onChange={async (e) => {
                const uploadState = await this.uploadImageCallBack(e);
                if (uploadState.success) {
                  console.log("In Upload Success State");
                  console.log(uploadState.data.link);
                  this.setState({
                    hasFeatureIamge: true,
                    article: {
                      ...this.state.article,
                      image: [...this.state.article.image, uploadState.data.link],
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

export default Add;
