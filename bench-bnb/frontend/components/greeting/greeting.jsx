import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <>
        <h2>{currentUser.username}</h2>
        <button onClick={logout}>Log Out</button>
      </>
    );
  } else {
    return (
      <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </>
    );
  }
};

export default Greeting;
