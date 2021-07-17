import React, { useState } from "react";
import "./register.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "../../axios";
import { CircularProgress } from "@material-ui/core";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      setLoading(false);
      res.data && history.replace("/login");
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <div className="register">
      <span className="title">Register</span>
      <form className="form">
        <label>Username</label>
        <input
          className="input"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="input"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleSubmit} disabled={loading}>
          {loading ? <CircularProgress size="20px" /> : "Register"}
        </button>
      </form>
      <button className="loginButton" disabled={loading}>
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
