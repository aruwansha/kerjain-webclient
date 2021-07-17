import axios from "configs/axios";

import { toast } from "react-toastify";

export const register = (payload, props) => (dispatch) => {
  return axios
    .post(`freelancer/register`, payload, {
      headers: { contentType: "application/x-www-form-urlencoded" },
    })
    .then((response) => {
      if (response.data) {
        toast.success("Berhasil mendaftar, Tunggu konfirmasi admin untuk bisa login", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        props.history.push("/login");
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
