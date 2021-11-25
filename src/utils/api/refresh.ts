import axios, { AxiosRequestConfig } from "axios";
const refresh = async (config: any): Promise<AxiosRequestConfig> => {
  let accessToken = localStorage.getItem("access_token");

  config.headers["Authorization"] = `Token ${accessToken}`;

  return config;
};

// const refreshError = (err: any) => {
//   localStorage.removeItem("expireAt");
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
// };

export { refresh };