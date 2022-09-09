import axios from "axios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./token";

export const apiClient = axios.create({
  baseURL: "https://serverus.net",
});

apiClient.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  config.headers = {
    Authorization: accessToken || "",
  };
  return config;
});

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 403) {
      try {
        const originalRequest = error.config;
        const data = await apiClient.post<{
          accessToken: string;
          refreshToken: string;
        }>("/api/refresh", {
          accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
          refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
        });
        if (data) {
          const { accessToken, refreshToken } = data.data;
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          localStorage.removeItem(REFRESH_TOKEN_KEY);
          localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
          localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
          originalRequest.headers["Authorization"] = accessToken;
          console.log(originalRequest);
          return await apiClient.request(originalRequest);
        }
      } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        console.log(error);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);