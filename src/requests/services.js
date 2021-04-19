import { api } from "./api";
import axios from "axios";

let token = JSON.parse(localStorage.getItem("token"));

const configParams = {
  "Content-Type": "application/json",
};

const userInfoConfigParams = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: `Bearer ${token}`,
};

const jsonConfigParams = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const SIGNUP_CALL = (data) => {
  return axios.post(api.user.signUp, data, { headers: configParams });
};

export const SIGNUP_OTP_CALL = (data) => {
  return axios.post(api.user.signUpOTP, data, { headers: configParams });
};

export const SIGNUP_RESEND_OTP_CALL = (data = " ") => {
  return axios.post(api.user.signUpResendOTP, data, { headers: configParams });
};

export const SIGNIN_CALL = (data) => {
  return axios.post(api.user.signIn, data, { headers: configParams });
};

export const GET_USER_INFO_CALL = (data) => {
  return axios.post(api.user.getInfo, data, {
    headers: jsonConfigParams,
  });
};

// export const VERIFY_EMAIL_CALL = (key) => {
//   return axios.get(api.user.verifyEmail(key), {
//     headers: userInfoConfigParams,
//   });
// };

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
