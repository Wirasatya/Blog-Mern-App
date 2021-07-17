import React, { useRef, useState } from "react";
import "./login.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "../../axios";
import { useStateGlobal } from "../../context/StateProvider";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const [{}, dispatch] = useStateGlobal();
  const userRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userLogin = {
      username: userRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await axios.post("/api/auth/login", userLogin);
      setLoading(false);
      dispatch({
        type: "SET_USER",
        user: response.data,
      });
      history.replace("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="login">
      <span className="title">Login</span>
      <form className="form">
        <label>Username</label>
        <input
          className="input"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="button" onClick={handleLogin} disabled={loading}>
          {loading ? <CircularProgress size="20px" /> : "Login"}
        </button>
      </form>
      <button className="registerButton" disabled={loading}>
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
