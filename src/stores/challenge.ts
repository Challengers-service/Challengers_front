import { atom } from "recoil";

export type ChallengeStepType = 1 | 2 | 3 | 4;

export const challengeStepAtom = atom<ChallengeStepType>({
  key: "challengeStepState",
  default: 1,
});
