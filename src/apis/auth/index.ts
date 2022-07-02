import axios from "axios";
import { JoinParams, LoginParams } from "./params.interface";

export const TOKEN_KEY = "token";

class Auth {
  join = async (joinParams: JoinParams) => {
    return axios.post("/api/signup", { ...joinParams });
  };

  login = async (loginParams: LoginParams) => {
    return axios.post("/api/signin", { ...loginParams });
  };
}

export default new Auth();
