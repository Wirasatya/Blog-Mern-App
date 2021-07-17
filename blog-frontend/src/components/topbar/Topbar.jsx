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
import { useStateGlobal } from "../../context/StateProvider";

const Topbar = () => {
  const [{ user }, dispatch] = useStateGlobal();
  const PF = "http://localhost:8000/images/";

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_USER",
      user: null,
    });
    sessionStorage.clear();
  };
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
          {user && (
            <li className="listItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
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
            <img className="img" src={PF + user.profilePic} alt="" />
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
