import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Redux-Store/auth-slice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmite = (e) => {
    e.preventDefault();
    dispatch(authActions.userLogIn());
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmite}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
