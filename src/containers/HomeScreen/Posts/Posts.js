import React from "react";
import Post from "./post/post";

const Posts = (props) =>
  props.posts.map((post) => {
    return (
      <div>
        <Post
          title={post.title}
          dess={post.dess}
          key={post.id}
          image={post.image}
        />
      </div>
    );
  });
export default Posts;
