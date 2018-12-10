import { combineReducers } from "redux";
import allUsersReducer from "./all_users_reducer";
import BenchesReducer from "./benches_reducer";


export default combineReducers({
  users: allUsersReducer,
  benches: BenchesReducer
});
