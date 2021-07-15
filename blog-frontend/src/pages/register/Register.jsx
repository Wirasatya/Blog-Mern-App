import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <span className="title">Register</span>
      <form className="form">
        <label>Username</label>
        <input
          className="input"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="button">Register</button>
      </form>
      <button className="loginButton">Login</button>
    </div>
  );
};

export default Register;
