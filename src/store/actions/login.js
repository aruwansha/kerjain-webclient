import { LOGIN } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const login = (payload, props) => (dispatch) => {
  return axios
    .post(`login`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded" },
    })
    .then((response) => {
      if (response.data) {
        if (response.data.data) {
          dispatch({
            type: LOGIN,
            payload: response.data,
          });
          toast.success("Berhasil login", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          props.history.push("/me");
        } else {
          window.location.replace("https://kerjain-webservice.herokuapp.com/");
        }
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
