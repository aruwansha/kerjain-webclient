import { LOGIN } from "../types";

import { setWithExpiry } from "utils/setExpiryLocalStorage";

const initialState = null;

const login = function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      setWithExpiry("name", action.payload.data.name, 3600000);
      setWithExpiry("picture", action.payload.data.picture, 3600000);
      setWithExpiry("level", action.payload.data.level, 3600000);
      setWithExpiry("token", action.payload.data.token, 3600000);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default login;
