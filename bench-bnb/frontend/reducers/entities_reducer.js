import { combineReducers } from "redux";
import allUsersReducer from "./all_users_reducer";

export default combineReducers({
  users: allUsersReducer
});
