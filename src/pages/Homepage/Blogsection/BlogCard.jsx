import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img
        src={blog.image}
       
        className="blog-card-image"
      />

      <div className="blog-card-content">
  

        <p>{blog.description}</p>

        <span>{blog.date}</span>
      </div>
    </div>
  );
};

export default BlogCard;