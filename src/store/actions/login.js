import { LOGIN } from "../types";

import axios from "configs/axios";

export const login = (payload, props) => (dispatch) => {
  return axios
    .post(`/login`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded" },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: LOGIN,
          payload: response.data,
        });
        props.history.push("/me");
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
