import { ORDER } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const confirm = (payload, token) => (dispatch) => {
  return axios
    .put(`/user/order/confirm`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded", "x-access-token": token },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: ORDER,
          payload: response.data,
        });
        toast.success("Order berhasil dikonfirmasi", {
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};

export const review = (payload, params, token) => (dispatch) => {
  return axios
    .post(`user/review/add/${params}`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded", "x-access-token": token },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: ORDER,
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
