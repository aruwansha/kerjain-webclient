import { combineReducers } from "redux";
import login from "./login";
import page from "./page";
import checkout from "./checkout";

export default combineReducers({
  page,
  login,
  checkout,
});
