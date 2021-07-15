import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const addService = (payload, token) => (dispatch) => {
  return axios
    .post(`freelancer/service`, payload, {
      headers: {
        contentType: "application/x-www-form-urlencoded",
        "x-access-token": token,
      },
    })
    .then((response) => {
      if (response.data) {
        toast.success("Data berhasil ditambahkan", {
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
      .put(`freelancer/service`, payload, {
        headers: {
          contentType: "application/x-www-form-urlencoded",
          "x-access-token": token,
        },
      })
      .then((response) => {
        if (response.data) {
          toast.success("Data berhasil diperbaharui", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      })
      .catch((error) => {
        // console.clear(error);
      });
  };

export const deleteService = (id, token) => (dispatch) => {
  axios
    .delete(`freelancer/service/${id}`, {
      headers: {
        "x-access-token": token,
      },
    })
    .then((response) => {
      if (response.data) {
        toast.error("Data berhasil dihapus", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};
