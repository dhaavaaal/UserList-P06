import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import GetData from "./GetData";
import { Provider } from "react-redux";
// import store from './redux/store';
import fetchUserStore from "./redux/fetchuser/fetchUserStore";

ReactDOM.render(
  <Provider store={fetchUserStore}>
    <GetData />
  </Provider>,
  document.getElementById("root")
);
