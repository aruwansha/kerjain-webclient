import { FREELANCER } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const pick_freelancer = (payload, params, token) => (dispatch) => {
  return axios
    .put(`user/request/${params}`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded", "x-access-token": token },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: FREELANCER,
          payload: response.data,
        });
        toast.success("Berhasil memilih freelancer silakan lakukan pembayaran", {
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
