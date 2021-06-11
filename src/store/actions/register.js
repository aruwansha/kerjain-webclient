import { REGISTER } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const register = (payload, props) => (dispatch) => {
  return axios
    .post(`/register`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded" },
    })
    .then((response) => {
      if (response.data) {
          console.log(response)
        dispatch({
          type: REGISTER,
          payload: response.data,
        });
        toast.info("Berhasil mendaftar silakan login!")
        props.history.push("/login");
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
