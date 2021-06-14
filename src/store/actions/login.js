import { LOGIN } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
        toast.success("Berhasil login", {
          position: toast.POSITION.BOTTOM_CENTER
        })
        props.history.push("/me");
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
