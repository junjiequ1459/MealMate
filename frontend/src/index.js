import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { restoreSession } from "./store/csrf";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; 
import configureStore from "./store";
import * as sessionActions from "./store/session";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}

let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
let initialState = {};

if (currentUser) {
  initialState = {
    users: {
      [currentUser.id]: currentUser,
    },
  };
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const initializeApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

restoreSession().then(initializeApp);
