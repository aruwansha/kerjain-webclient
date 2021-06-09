import { FETCH_PAGE } from "../types";

import axios from "configs/axios";

export const fetchPage = (url, page, token) => (dispatch) => {
  return axios
    .get(url, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data,
        },
      });
    });
};
