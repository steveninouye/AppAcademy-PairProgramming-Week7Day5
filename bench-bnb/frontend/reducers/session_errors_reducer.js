import { LOGIN_ERRORS, SIGNUP_ERRORS } from "../actions/session_action";

const SessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_ERRORS: // "invalid credentials"
      return [action.errors];
    case SIGNUP_ERRORS: // ['username taken','']
      return action.errors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
