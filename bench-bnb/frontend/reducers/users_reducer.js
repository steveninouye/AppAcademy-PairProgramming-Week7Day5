import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER
} from "../actions/session_action";

const UsersReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case SIGNUP_USER:
      return Object.keys(action.user)[0];
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default UsersReducer;
