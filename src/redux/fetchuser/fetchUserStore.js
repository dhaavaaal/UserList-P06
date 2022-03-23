import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import fetchUserReducerFunction from "./fetchUserReducer";
import { createStore } from "redux";

const fetchUserStore = createStore(
  fetchUserReducerFunction,
  applyMiddleware(thunk, logger)
);

export default fetchUserStore;
