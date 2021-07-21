import { PROFILE } from "../types";

import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const editProfile = (payload, token) => (dispatch) => {
  return axios
    .put(`user/profile/update`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded", "x-access-token": token },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: PROFILE,
          payload: response.data,
        });
        toast.success("Profil berhasil diubah", {
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
