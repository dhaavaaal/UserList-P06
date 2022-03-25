import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import fetchUserReducerFunction from "./fetchUserReducer";
import { createStore } from "redux";

const fetchUserStore = createStore(
  fetchUserReducerFunction,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default fetchUserStore;
