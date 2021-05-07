import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./Reset.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import reducer from "./store/reducers/auth";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app,document.getElementById("root"));

reportWebVitals();
