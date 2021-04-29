import React from "react";
import Post from "./post/post";

const Posts = (props) =>
  // map all the data and pass it to the Post component
  props.posts.map((post) => {
    return (
      <Post
        title={post.title}
        dess={post.desc}
        key={post.id}
        image={post.image}
        link={post.link}
        categoryLable={post.categoryLable}
      />
    );
  });
export default Posts;
