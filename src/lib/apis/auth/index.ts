import { apiClient } from "constants/api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "constants/token";
import { JoinParams, LoginParams, User } from "./types";

class Auth {
  join = async (joinParams: JoinParams) => {
    return apiClient.post("/api/signup", { ...joinParams });
  };

  login = async (loginParams: LoginParams) => {
    return apiClient.post("/api/signin", { ...loginParams });
  };

  refreshedAccessToken = async () => {
    const data = await apiClient.post<{
      accessToken: string;
      refreshToken: string;
    }>("/api/refresh", {
      accessToken: localStorage.getItem(ACCESS_TOKEN_KEY)?.slice(7),
      refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
    });
    return data;
  };

  getMe = async () => {
    const response = await apiClient.get<User>("/api/user/me");
    return response.data;
  };
}

export default new Auth();
