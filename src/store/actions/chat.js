import { CHAT } from "../types";

import axios from "configs/axios";

export const chat = (payload, params, token) => (dispatch) => {
  return axios
    .post(`/chat/add/${params}`, payload, {
      headers: {
        contentType: "application/x-www-form-urlencoded",
        "x-access-token": token,
      },
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: CHAT,
          payload: response.data,
        });
        window.location.reload();
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};

export const deleteAllChat = (params, token) => (dispatch) => {
  axios.delete(`/chat/delete/${params}`, {
    headers: { "x-access-token": token },
  });
};

export const deleteChat = (params, token) => (dispatch) => {
  axios.delete(`/chat/get/delete/${params}`, {
    headers: { "x-access-token": token },
  });
};
