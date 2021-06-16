import { CHECKOUT_BOOKING } from "../types";
import axios from "configs/axios";

export const checkoutBooking = (payload ) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBookingService = (payload, token) => () => {
  return axios.post(`/service/order`, payload, {
    headers: { "x-access-token": token, contentType: "multipart/form-data" },
  });
};

export const submitBookingRequest = (payload, token) => () => {
  return axios.post(`/request/order`, payload, {
    headers: { "x-access-token": token, contentType: "multipart/form-data" },
  });
};
