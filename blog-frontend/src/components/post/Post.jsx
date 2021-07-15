import React from "react";
import "./post.scss";
import { Link } from "react-router-dom";

const Post = ({ img }) => {
  return (
    <div className="post">
      <img className="img" src={img} alt="" />
      <div className="info">
        <div className="cats">
          <span className="cat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="cat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="title">
          <Link to="//abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="date">1 hour ago</span>
      </div>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
