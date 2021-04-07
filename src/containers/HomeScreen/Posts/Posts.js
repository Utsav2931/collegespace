import React from "react";
import Post from "./post/post";

const Posts = (props) =>
  props.posts.map((post) => {
    return (
        <Post
          title={post.title}
          dess={post.desc}
          key={post.id}
          image={post.image}
          link={post.link}
          // propss = {post}
        />
    );
  });
export default Posts;
