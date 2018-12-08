import React from "react";
import { Route, HashRouter } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    <HashRouter>
      <>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
      </>
    </HashRouter>
  </div>
);

export default App;
