import { LOGIN } from "../types";

const initialState = {};

const login = function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default login;
