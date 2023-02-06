import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createUser, loginUser, logoutUser } from "./store/userReducer";
// import rootReducer from "../reducers/root_reducer";
import session from "./session";

const rootReducer = combineReducers({
  user: userReducer,
  session,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
