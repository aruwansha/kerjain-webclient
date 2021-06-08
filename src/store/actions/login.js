import axios from "axios";

export const login = (payload) => () => {
  return axios.post(`${process.env.REACT_APP_HOST}api/v1/user/login`, payload, {
    headers: { contentType: "application/x-www-form-urlencoded" },
  });
};