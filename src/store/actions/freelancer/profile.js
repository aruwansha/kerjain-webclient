import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const editPersonal = (payload, token) => (dispatch) => {
  return axios
    .put(`freelancer/profile/personal`, payload, {
      headers: {
        contentType: "application/x-www-form-urlencoded",
        "x-access-token": token,
      },
    })
    .then((response) => {
      if (response.data) {
        toast.success("Data berhasil diubah", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};

export const editService = (payload, token) => (dispatch) => {
  return axios
    .put(`freelancer/profile/service`, payload, {
      headers: {
        contentType: "application/x-www-form-urlencoded",
        "x-access-token": token,
      },
    })
    .then((response) => {
      if (response.data) {
        toast.success("Data berhasil diubah", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};

export const editBank = (payload, token) => (dispatch) => {
    return axios
      .put(`freelancer/profile/bank`, payload, {
        headers: {
          contentType: "application/x-www-form-urlencoded",
          "x-access-token": token,
        },
      })
      .then((response) => {
        if (response.data) {
          toast.success("Data berhasil diubah", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      })
      .catch((error) => {
        // console.clear(error);
      });
  };