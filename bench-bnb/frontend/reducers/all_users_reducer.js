import { LOGIN_USER, SIGNUP_USER } from "../actions/session_action";

const allUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case SIGNUP_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default allUsersReducer;
