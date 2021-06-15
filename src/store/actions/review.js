import { REVIEW } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const review = (payload, params, token) => (dispatch) => {
  return axios
    .post(`/review/add/${params}`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded", "x-access-token": token },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: REVIEW,
          payload: response.data,
        });
        toast.success("Ulasan berhasil terkirim", {
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
