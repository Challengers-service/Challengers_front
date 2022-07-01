import { TOKEN_KEY } from "apis/auth";
import { atom } from "recoil";

const token = localStorage.getItem(TOKEN_KEY);

export const tokenAtom = atom({
  key: "tokenState",
  default: token || "",
});

export const isLoggedAtom = atom({
  key: "isLoggedState",
  default: Boolean(token),
});
