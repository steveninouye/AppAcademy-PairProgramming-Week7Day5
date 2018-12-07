import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER
} from "../actions/session_action";

const UsersReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.user.id;
    case LOGOUT_USER:
      return null;
    case SIGNUP_USER:
      return action.user.id;
    default:
      return state;
  }
};

export default UsersReducer;
