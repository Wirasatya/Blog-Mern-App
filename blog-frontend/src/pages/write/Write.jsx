import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import "./write.scss";
import axios from "../../axios";
import { useStateGlobal } from "../../context/StateProvider";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [{ user }] = useStateGlobal();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/api/posts", newPost);
      setLoading(false);
      history.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className="write">
      {file && <img className="img" src={URL.createObjectURL(file)} alt="" />}
      <form className="form">
        <div className="formGroup">
          <label htmlFor="fileInput">
            <Add className="icon"></Add>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="input"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <textarea
            className="input text"
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          className="submit"
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress size="20px" /> : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default Write;
