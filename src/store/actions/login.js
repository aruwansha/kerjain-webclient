import axios from "configs/axios";

export const login = (payload) => () => {
  return axios.post(`/login`, payload, {
    headers: { contentType: "application/x-www-form-urlencoded" },
  });
};