import { combineReducers } from "redux";
import sessionReducer from "./users_reducer";

export default combineReducers({ id: sessionReducer });
