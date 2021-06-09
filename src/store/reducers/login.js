import { LOGIN } from "../types";

const initialState = null;

const login = function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
}

export default login