import axios, { AxiosError } from "axios";

export const request = axios.create({
  baseURL: "baseURL",
  timeout: 100000,
});

const instance = axios.create({
  baseURL: "baseURL",
  timeout: 100000,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
