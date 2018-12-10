import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import SearchContainer from './search/search_container';

const App = () => (
   <div>
      <h1>Bench BnB</h1>
      <GreetingContainer />
      <HashRouter>
         <>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SearchContainer} />
         </>
      </HashRouter>
   </div>
);

export default App;
