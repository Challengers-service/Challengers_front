import { atom } from "recoil";
export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";

const token = localStorage.getItem(ACCESS_TOKEN_KEY);

export const tokenAtom = atom({
  key: "tokenState",
  default: token || "",
});

export const isLoggedAtom = atom({
  key: "isLoggedState",
  default: Boolean(token),
});
