import axios, { AxiosError } from "axios";
import { refresh, forConnection } from "../refresh";

export const request = axios.create({
  baseURL: "http://54.180.163.28:8000",
  timeout: 100000,
});

const instance = axios.create({
  baseURL: "http://54.180.163.28:8000",
  timeout: 100000,
});

instance.interceptors.request.use(refresh);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

const connection = axios.create({
  baseURL: "http://54.180.163.28:8000",
  timeout: 100000,
});

connection.interceptors.request.use(forConnection);

connection.interceptors.response.use(
  function (response) {
    return response;
  }, 
  function (error : AxiosError) {
    return Promise.reject(error);
  }
)


export { instance, connection };