import { REGISTER } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const register = (payload, props) => (dispatch) => {
  return axios
    .post(`user/register`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded" },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: REGISTER,
          payload: response.data,
        });
        toast.success("Berhasil mendaftar silakan login!", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        props.history.push("/login");
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
