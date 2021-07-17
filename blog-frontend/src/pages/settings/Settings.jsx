import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.scss";
import { Avatar } from "@material-ui/core";
import axios from "../../axios";
import { useStateGlobal } from "../../context/StateProvider";
import { CircularProgress } from "@material-ui/core";

const Settings = () => {
  const [{ user }, dispatch] = useStateGlobal();
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const PF = "http://localhost:8000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put("/api/users/" + user._id, updatedUser);
      setLoading(false);
      setSuccess(true);
      dispatch({ type: "SET_USER", user: res.data });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

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
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
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
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            name="name"
          />
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <button
            className="submitButton"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress size="20px" /> : "Update"}
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Settings;
