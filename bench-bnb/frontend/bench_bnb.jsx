import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./util/session_api_util";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore();
  window.store = store;
  // window.dispatch = dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  ReactDOM.render(<h1>react is working now!</h1>, root);
});
