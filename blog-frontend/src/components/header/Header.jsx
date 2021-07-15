import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="titles">
        <span className="titleSm">React & Node</span>
        <span className="titleLg">BLOG</span>
      </div>
      <img
        className="img"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
};

export default Header;
