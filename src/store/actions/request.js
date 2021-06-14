import { REQUEST } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const request = (payload, token) => (dispatch) => {
  return axios
    .post(`/request/add`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded", "x-access-token": token },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: REQUEST,
          payload: response.data,
        });
        toast.success("Berhasil membuat permintaan, silakan menunggu", {
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
