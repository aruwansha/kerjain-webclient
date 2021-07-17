import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


export const editPassword = (payload, token) => (dispatch) => {
    return axios
      .put(`freelancer/password`, payload, {
        headers: {
          contentType: "application/x-www-form-urlencoded",
          "x-access-token": token,
        },
      })
      .then((response) => {
        if (response.data) {
          toast.success("Password berhasil diperbaharui", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      })
      .catch((error) => {
        // console.clear(error);
      });
  };

