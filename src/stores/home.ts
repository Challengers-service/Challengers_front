import { atom } from "recoil";

export const searchChallengeLengthAtom = atom<number | null>({
  key: "searchChallengeLengthState",
  default: null,
});
