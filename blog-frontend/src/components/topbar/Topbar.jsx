import React from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  Search,
} from "@material-ui/icons";

const Topbar = () => {
  const user = true;
  return (
    <div className="topbar">
      <div className="left">
        <Facebook className="icon"></Facebook>
        <Instagram className="icon"></Instagram>
        <Pinterest className="icon"></Pinterest>
        <Twitter className="icon"></Twitter>
      </div>
      <div className="center">
        <ul className="list">
          <li className="listItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="listItem">ABOUT</li>
          <li className="listItem">CONTACT</li>
          <li className="listItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="listItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="right">
        <form className="searchWrap">
          <input type="text" />
          <button type="submit" onClick={(e) => e.preventDefault()}></button>
          <Search className="searchIcon"></Search>
        </form>
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="img"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="list">
            <li className="listItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="listItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Topbar;
