import { combineReducers } from "redux";

import entities from "./entities_reducer";
import sessions from "./session_reducer";
import ui from "./ui_reducer";
import errors from "./errors_reducer";

export default combineReducers({
  entities,
  sessions,
  ui,
  errors
});
