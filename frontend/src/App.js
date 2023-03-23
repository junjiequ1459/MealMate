import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import MMIndexPage from "./components/MMIndexPage";
import Footer from "./components/Footer";
import BusinessIndexPage from "./components/BusinessIndexPage";
import ShowPage from "./components/ShowPage";
import ReviewForm from "./components/ReviewPage";
import ReviewEditForm from "./components/ShowPage/ReviewEditForm";
import { useSelector } from "react-redux";
import ReviewContainer from "./components/ShowPage/ReviewContainer";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen/LoadingScreen";

function App() {
  const reviews = useSelector((state) => state.reviews);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen />}
      {loaded && (
        <>
          <Switch>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="/business">
              <BusinessIndexPage />
            </Route>
            <Route path="/business/:businessId" component={ShowPage}></Route>
            <Route path="/reviews/:businessId" component={ReviewForm}></Route>
            <Route exact path="/">
              <MMIndexPage />
            </Route>
            <Route exact path="/reviews/:id/edit" component={ReviewEditForm} />
            <Route exact path="/reviews">
              <ReviewContainer showReview={reviews} />
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
