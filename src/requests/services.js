import { api } from "./api";
import axios from "axios";

let token = localStorage.getItem("token");

const configParams = {
  "Content-Type": "application/json",
};

const userInfoConfigParams = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: `bearer ${token}`,
};

const jsonConfigParams = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `bearer ${token}`,
};

export const SIGNIN_CALL = (data) => {
  return axios.post(api.user.signUp, data, { headers: configParams });
};

export const VERIFY_EMAIL_CALL = (key) => {
  return axios.get(api.user.verifyEmail(key), {
    headers: userInfoConfigParams,
  });
};

// export const SIGNIN_CALL = (data) => {
//   return axios.post(api.user.signIn, data, { headers: configParams });
// };

// export const GET_USER_INFO = () => {
//   return axios.get(api.user.getInfo, { headers: userInfoConfigParams });
// };

// export const UPDATE_USER_CALL = (data) => {
//   return axios.put(api.user.updateInfo, data, {
//     headers: jsonConfigParams,
//   });
// };

// export const CREATE_DATASET_CALL = (data) => {
//   return axios.post(api.dataset.create, data, {
//     headers: userInfoConfigParams,
//   });
// };
