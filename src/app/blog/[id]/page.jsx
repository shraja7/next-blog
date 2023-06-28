import React from "react";

const BlogPost = ({ params }) => {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Post ID: {params.id}</p>
    </div>
  );
};

export default BlogPost;
