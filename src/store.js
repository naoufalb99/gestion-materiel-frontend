import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import loaderMiddleware from "./utils/loaderMiddleware";

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, loaderMiddleware)
);

export default store;
