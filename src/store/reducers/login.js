import { LOGIN } from "../types";

const initialState = null;

const login = function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload.data.token)
      localStorage.setItem("name", action.payload.data.name)
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default login;
