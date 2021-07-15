import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <span className="title">Login</span>
      <form className="form">
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
        <button className="button">Login</button>
      </form>
      <button className="registerButton">Register</button>
    </div>
  );
};

export default Login;
