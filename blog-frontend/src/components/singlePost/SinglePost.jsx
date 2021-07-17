import React, { useEffect, useState } from "react";
import "./singlePost.scss";
import { Link, useHistory } from "react-router-dom";
import { Edit, DeleteForever } from "@material-ui/icons";
import axios from "../../axios";
import { useStateGlobal } from "../../context/StateProvider";
import { CircularProgress } from "@material-ui/core";
import { useLocation } from "react-router";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:8000/images/";
  const [{ user }] = useStateGlobal();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      setLoading(false);
      history.replace("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios.put(`/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setLoading(false);
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="singlePost">
      <div className="wrapper">
        {post.photo && <img src={PF + post.photo} alt="" className="img" />}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="input"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="title">
            {title}
            {post.username === user?.username && (
              <div className="edit">
                <Edit
                  className="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    setUpdateMode(true);
                  }}
                ></Edit>
                {loading ? (
                  <CircularProgress size="20px" />
                ) : (
                  <DeleteForever
                    onClick={handleDelete}
                    className="icon"
                  ></DeleteForever>
                )}
              </div>
            )}
          </h1>
        )}
        <div className="info">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="author"> {post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            className="input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="desc">{desc}</p>
        )}
        {updateMode && (
          <button className="button" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
