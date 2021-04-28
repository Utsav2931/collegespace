import classes from "./AddPosts.module.css";
import React, { Component } from "react";
import BasicPadding from "../../../components/UI/BasicCompPadding/BasicLayout";
import Textfield from "../../../components/UI/TextFormField/Textfield";
import firebase from "../../../config/config";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../../components/UI/Loader/Loader";
import GeneralModal from "../../../components/UI/GeneralModal/GeneralModal";

//This class is used for adding a new Post
export class AddPosts extends Component {
  currentDate = new Date();
  files = [];
  db = firebase.firestore();
  storageRef = firebase.storage();
  state = {
    article: {
      title: "",
      desc: "",
      createDate: this.currentDate,
      author: "",
      image: [],
      categoryLable: "",
      id: "",
      link: "",
      verified: false,
    },
    error: "",
    loaderDisplay: false,
  };

  // Uploads only Image to firebase to storage
  uploadImageCallBack = (e) => {
    console.log("IN IMAGE " + e);
    return new Promise(async (resolve, reject) => {
      const file = e;
      const filename = uuidv4();
      this.storageRef
        .ref()
        .child("post/image/" + filename)
        .put(file)
        .then(async (snapshot) => {
          const downloadURL = await this.storageRef
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
  // Call uploadImageCallBack and returns a promise
  callbk = (e) => {
    return new Promise(async (resolve, reject) => {
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
        console.log(this.state.article.image);
      }
      resolve({ success: true });
    });
  };
  // Used for validation of article
  handleValidation() {
    return new Promise(async (resolve, reject) => {
      const {
        title,
        desc,
        image,
        categoryLable,
        link,
        author,
      } = this.state.article;
      console.log(desc);
      if (desc == "") {
        this.setState({
          error: "Description is not valid",
        });
      } else if (title == "") {
        this.setState({ error: "Title is not valid" });
      } else if (categoryLable == "") {
        this.setState({ error: "Category is not valid" });
      } else if (author == "") {
        this.setState({ error: "Author is not valid" });
      } else {
        this.setState({
          loaderDisplay: true,
        });
        const len = this.files.length;
        console.log(len);
        for (var i = 0; i < len; i++) {
          const result = await this.callbk(this.files[i]);
          if (result.success) {
          }
        }

        this.uploadPost();
      }
    });
  }
 
  //If article is valid this function will upload the post to firebase
  uploadPost = () => {
    this.setState({ error: "" });
    let id = this.state.article.title;
    const article = this.state.article;
    id = id.split(" ").join("-");
    article.id = id;
    console.log(id);
    this.db.collection("Posts")
      .doc(id)
      .set(article)
      .then((res) => {
        this.files = [];
        this.setState({
          article: {
            title: "",
            desc: "",
            createDate: this.currentDate,
            author: "",
            image: [],
            categoryLable: "",
            id: "",
            link: "",
            verified: false,
          },
          loaderDisplay: false,
        });
        console.log(res);
        alert("Your post has been uploaded for verification 👍");
      })
      .catch((err) => console.log(err));
  };
  
  // For mounting local file to website
  fileAdded = (e) => {
    var len = 0;
    for (const f in e.target.files) {
      if (e.target.files.hasOwnProperty(f)) len++;
    }
    console.log("length " + len);
    for (var i = 0; i < len; i++) {
      this.files = [...this.files, e.target.files[i]];
      console.log(this.files[i]);
      console.log(this.files.length);
    }
    this.setState({});
  };

  //This function update the title if the user chages it
  onChangeArticleTitle = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        title: value,
      },
    });
  };

  //This function update the author if the user chages it
  onChangeArticleAuthor = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        author: value,
      },
    });
  };

  //This function update the Description if the user chages it
  onChangeArticleDesc = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        desc: value,
      },
    });
  };

  //This function update the link if the user chages it
  onChangeArticleLink = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        link: value,
      },
    });
  };

  //This function update the category if the user chages it
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
    this.index = 0;
    return (
      <BasicPadding>
        {this.state.loaderDisplay ? (
          <GeneralModal >
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
        <h1>Make Post</h1>
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
              value={this.state.article.link}
              onChange={(e) => this.onChangeArticleLink(e.target.value)}
              title="Link"
            />
            <Textfield
              value={this.state.article.author}
              onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
              title="Author"
            />
            <label className={classes.label}>Category</label>
            <select
              className={classes.select}
              onChange={(e) => this.onChangeArticlecategory(e.target.value)}
              value={this.state.article.categoryLable}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option name="education">Education</option>
              <option name="education">Event</option>
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
            <header>Select file to Upload</header>
            <label for="fileImage" className={classes.btn}>
              Upload Image
            </label>
            <input
              className={classes.filechossen}
              type="file"
              multiple
              id="fileImage"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={(e) => {
                this.fileAdded(e);
              }}
            ></input>

            {this.files.map((imageName) => {
              return <div>{imageName.name}</div>;
            })}
          </div>
        </div>
      </BasicPadding>
    );
  }
}

export default AddPosts;
