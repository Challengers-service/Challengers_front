import axios from "axios";

export interface JoinParams {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

class Auth {
  join = async (joinParams: JoinParams) => {
    return axios.post("/signup", { ...joinParams });
  };
}

export default new Auth();
