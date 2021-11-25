import axios, { AxiosRequestConfig } from "axios";
const refresh = async (config: any): Promise<AxiosRequestConfig> => {
  let accessToken = localStorage.getItem("access_token");

  config.headers["Authorization"] = `Token ${accessToken}`;

  return config;
};

const forConnection = async (config: any): Promise<AxiosRequestConfig> => {
  let accessToken = localStorage.getItem("access_token");

  config.headers["Authorization"] = `Token ${accessToken}`;
  config.headers["Content-Type"] = "multipart/form-data";

  return config;
};

export { refresh, forConnection };