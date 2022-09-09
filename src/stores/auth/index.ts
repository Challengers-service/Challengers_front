import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "constants/token";
import { atom } from "recoil";

const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

export const accessTokenAtom = atom({
  key: "accessTokenState",
  default: accessToken || "",
});

export const refreshTokenAtom = atom({
  key: "refreshTokenState",
  default: refreshToken || "",
});

export const isLoggedAtom = atom({
  key: "isLoggedState",
  default: Boolean(accessToken),
});
