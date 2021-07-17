import React from "react";
import "./post.scss";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:8000/images/";
  return (
    <div className="post">
      {post.photo && <img className="img" src={PF + post.photo} alt="" />}
      <div className="info">
        <div className="cats">
          {post.categories.map((c) => (
            <span className="cat">{c.name}</span>
          ))}
        </div>
        <span className="title">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="date">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="desc">{post.desc}</p>
    </div>
  );
};

export default Post;
