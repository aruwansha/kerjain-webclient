import { CHECKOUT_BOOKING } from "../types";
import axios from "configs/axios";

export const checkoutBooking = (payload ) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBooking = (payload, token) => () => {
  return axios.post(`/service/order`, payload, {
    headers: { "x-access-token": token, contentType: "multipart/form-data" },
  });
};
