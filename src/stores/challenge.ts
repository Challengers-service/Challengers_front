import { CategoryType } from "constants/category";
import { atom } from "recoil";

export type ChallengeStepType = 1 | 2 | 3 | 4;

export type ChallengeStepTwo = {
  name: string;
  userCountLimit: number;
  startDate: string;
  endDate: string;
  introduction: string;
} | null;

export type ChallengeStepThree = {
  depositPoint: number;
  challengeRule: string;
  examplePhotos: FileList | null;
  CheckFrequencyType: string;
  CheckTimesPerRound: number;
} | null;

export const challengeStepAtom = atom<ChallengeStepType>({
  key: "challengeStepState",
  default: 1,
});

export const selectCategoryAtom = atom<CategoryType>({
  key: "selectCategoryState",
  default: "LIFE",
});

export const challengeStepTwoAtom = atom<ChallengeStepTwo>({
  key: "challengeStepTwoState",
  default: null,
});

export const challengeStepThreeAtom = atom<ChallengeStepThree>({
  key: "challengeStepThreeState",
  default: null,
});
