import classes from "./AddPosts.module.css";
import React, { Component } from "react";
import BasicPadding from "../../../components/UI/BasicCompPadding/BasicLayout";
import Textfield from "../../../components/UI/TextFormField/Textfield";
import firebase from "../../../config/config";
import { v4 as uuidv4 } from "uuid";

var index = 0;
var calluploadfunction = false;

var currentdate = new Date();
var files = [];
const db = firebase.firestore();
const storageRef = firebase.storage();
export class Add extends Component {
  state = {
    article: {
      title: "",
      desc: "",
      createDate: currentdate,
      author: "",
      image: [],
      categoryLable: "",
      id: "",
      link: "",
      verified:false
    },
    error: "",
  };
  uploadImageCallBack = (e) => {
    console.log("IN IMAGE " + e);
    return new Promise(async (resolve, reject) => {
      const file = e;
      const filename = uuidv4();
      storageRef
        .ref()
        .child("post/image/" + filename)
        .put(file)
        .then(async (snapshot) => {
          const downloadURL = await storageRef
            .ref()
            .child("post/image/" + filename)
            .getDownloadURL();
          console.log(downloadURL);
          resolve({
            success: true,
            data: { link: downloadURL },
          });
        });
    });
  };
  callbk = (e) => {
    return new Promise(async (resolve, reject) => {
      const uploadState = await this.uploadImageCallBack(e);
      if (uploadState.success) {
        console.log("In Upload Success State");
        //alert("Your image has been successfully uploaded 👍, you can upload second image if you want");
        console.log(uploadState.data.link);
        this.setState({
          hasFeatureIamge: true,
          article: {
            ...this.state.article,
            image: [...this.state.article.image, uploadState.data.link],
          },
        });
        console.log(this.state.article.image);
      }
      resolve({ success: true });
    });
  };

  handleValidation() {
    return new Promise(async (resolve, reject) => {
      const { title, desc, image, categoryLable, link } = this.state.article;
      console.log(desc)
      // only each block with generate error
      if (desc == null) {
        this.setState({
          error: "DESC is not valid",
        });
      } else if (title == null) {
        this.setState({ error: "title is not valid" });
      } else if (categoryLable == null) {
        this.setState({ error: "category is not valid" });
      } else if (link == null) {
        this.setState({ error: "link is not valid" });
      } else {
        const len = files.length;
        console.log(len);
        for (var i = 0; i < len; i++) {
          const rand = await this.callbk(files[i]);
          if (rand.success) {
          }
        }
        this.uploadPost();
      }
    });
  }

  uploadPost = () => {
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
        alert("Your post has been succesfully uploaded 👍");
      })
      .catch((err) => console.log(err));
  };

  fileAdded = (e) => {
    // const file = e.target.files[index]
    // files = [e.target.files[0], ...files]
    // console.log(files[0])
    // index++
    var len = 0;
    for (const f in e.target.files) {
      len++;
    }
    //files = [...files,e.target.files[0]]//1
    for (var i = 0; i < len / 2; i++) {
      files = [...files, e.target.files[i]];
      console.log(files[i]);
      console.log(files.length);
    }
  };

  displayFileNames = () => {
      for(let i=0; i< files.length; i++){
        console.log(files[i].name);
          return files[i].name;
      }
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

  onChangeArticleAuthor = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        author: value,
      },
    });
    //console.log(this.state.article);
  };

  onChangeArticleDesc = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        desc: value,
      },
    });
     //console.log(this.state.article);
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
            <Textfield
              onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
              title="Author"
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
              <option name="education">Sports</option>
            </select>
            <button
              onClick={async (e) => await this.handleValidation(e)}
              className={classes.cardbutton}
            >
              Submit
            </button>
          </div>

          <div className={classes.drag_area}>
            {/* <div className={classes.icon}>
              <i class="fas fa-cloud-upload-alt"></i>
            </div> */}
            <header>Select file to Upload</header>

            {/* <br></br>
            <br></br> */}
            <label for="fileImage"className={classes.btn}>
                Upload Image
            </label>
            <input
              className={classes.filechossen}
              type="file"
              multiple
              id="fileImage"
              accept="image/x-png,image/gif,image/jpeg"
              // onChange={async (e) => {
              //   const uploadState = await this.uploadImageCallBack(e);
              //   if (uploadState.success) {
              //     console.log("In Upload Success State");
              //     alert("Your image has been successfully uploaded 👍, you can upload second image if you want");
              //     console.log(uploadState.data.link);
              //     this.setState({
              //       hasFeatureIamge: true,
              //       article: {
              //         ...this.state.article,
              //         image: [...this.state.article.image, uploadState.data.link],
              //       },
              //     });
              //   }
              // }}
              onChange={(e) => {
                this.fileAdded(e);
              }}
            ></input>

            {this.displayFileNames()}


          </div>
        </div>
      </BasicPadding>
    );
  }
}

export default Add;
