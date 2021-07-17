import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Pinterest, Instagram } from "@material-ui/icons";
import axios from "../../axios";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
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
          {cats.map((cat) => (
            <li key={cat._id} className="listItem">
              <Link className="link" to={`/?cat=${cat.name}`}>
                {cat.name}
              </Link>
            </li>
          ))}
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
