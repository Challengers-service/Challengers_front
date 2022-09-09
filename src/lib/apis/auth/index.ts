import { apiClient } from "constants/api";
import { JoinParams, LoginParams } from "./params.interface";

class Auth {
  join = async (joinParams: JoinParams) => {
    return apiClient.post("/api/signup", { ...joinParams });
  };

  login = async (loginParams: LoginParams) => {
    return apiClient.post("/api/signin", { ...loginParams });
  };
}

export default new Auth();
