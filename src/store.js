import { createStore } from "redux";
import { combineReducer } from "./combineReducers";
export const Store = createStore(
  combineReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
