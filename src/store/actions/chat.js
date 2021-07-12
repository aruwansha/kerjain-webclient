import { CHAT } from "../types";

import axios from "configs/axios";

export const chat = (role, id, payload, token) => (dispatch) => {
  return axios
    .post(`${role}/chat/${id}`, payload, {
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
      }
    })
    .catch((error) => {
      // console.clear(error);
    });
};

export const deleteAllChat = (role, id, token) => (dispatch) => {
  axios.delete(`${role}/chats/${id}`, {
    headers: { "x-access-token": token },
  });
};

export const deleteChat = (role, id, token) => (dispatch) => {
  axios.delete(`${role}/chats/detail/${id}`, {
    headers: { "x-access-token": token },
  });
};
