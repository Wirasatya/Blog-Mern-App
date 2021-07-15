import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.scss";
import { Avatar } from "@material-ui/core";

const Settings = () => {
  return (
    <div className="settings">
      <div className="wrapper">
        <div className="title">
          <span className="titleUpdate">Update Your Account</span>
          <span className="titleDelete">Delete Account</span>
        </div>
        <form className="form">
          <label>Profile Picture</label>
          <div className="photoProfile">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <Avatar className="avatar"></Avatar>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="input"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="submitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Settings;
