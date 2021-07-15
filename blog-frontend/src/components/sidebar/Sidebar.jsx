import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Pinterest, Instagram } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="item">
        <span className="title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="item">
        <span className="title">CATEGORIES</span>
        <ul className="list">
          <li className="listItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="item">
        <span className="title">FOLLOW US</span>
        <div className="social">
          <Facebook className="icon"></Facebook>
          <Instagram className="icon"></Instagram>
          <Pinterest className="icon"></Pinterest>
          <Twitter className="icon"></Twitter>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;