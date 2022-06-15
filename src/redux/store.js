import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [reduxThunk];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
