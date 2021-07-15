import axios from "configs/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const addBid = (payload, token) => (dispatch) => {
  return axios
    .post(`freelancer/request/bid`, payload, {
      headers: {
        contentType: "application/x-www-form-urlencoded",
        "x-access-token": token,
      },
    })
    .then((response) => {
      if (response.data) {
        toast.success("Berhasil mengikuti bid", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};

export const editBid = (payload, token) => (dispatch) => {
    return axios
      .put(`freelancer/request/bid`, payload, {
        headers: {
          contentType: "application/x-www-form-urlencoded",
          "x-access-token": token,
        },
      })
      .then((response) => {
        if (response.data) {
          toast.success("Bid berhasil diperbaharui", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      })
      .catch((error) => {
        // console.clear(error);
      });
  };

export const deleteBid = (id, token) => (dispatch) => {
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
