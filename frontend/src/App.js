// frontend/src/App.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import MMIndexPage from "./components/MMIndexPage";
import Footer from "./components/Footer";
import BusinessIndexPage from "./components/BusinessIndexPage";
function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/business">
          <BusinessIndexPage />
        </Route>
        <Route exact path="/">
          <MMIndexPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
