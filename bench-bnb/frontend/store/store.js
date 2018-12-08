import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

let prevState = {
  entities: {
    users: {}
  },
  sessions: {
    id: null
  },
  errors: {
    session: []
  }
};

const configureStore = (preloadedState = prevState) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;
