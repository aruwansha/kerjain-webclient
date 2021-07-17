import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const sendWork = (payload, params, token) => (dispatch) => {
  return axios
    .put(`freelancer/order/${params}/send-work`, payload, {
      headers: {
        contentType: "application/x-www-form-urlencoded",
        "x-access-token": token,
      },
    })
    .then((response) => {
      if (response.data) {
        toast.success("Berhasil mengirim bukti pekerjaan", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};