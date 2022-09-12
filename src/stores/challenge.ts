import { CategoryType } from "lib/apis/challenge/types";
import { atom, selector } from "recoil";

export type ChallengeStepType = 1 | 2 | 3 | 4;

export type ChallengeStepTwo = {
  name: string;
  userCountLimit: number;
  startDate: string;
  endDate: string;
  introduction: string;
  tags?: string;
} | null;

export type ChallengeStepThree = {
  depositPoint: number;
  challengeRule: string;
  examplePhotos: FileList;
  checkFrequencyType: string;
  checkTimesPerRound: number;
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
  dangerouslyAllowMutability: true,
});

export const createChallengeSelector = selector({
  key: "createChallengeSelectState",
  get: ({ get }) => {
    const category = get(selectCategoryAtom);
    const stepTwo = get(challengeStepTwoAtom);
    const stepThree = get(challengeStepThreeAtom);
    if (stepTwo === null || stepThree === null) return null;
    return {
      category,
      ...stepTwo,
      ...stepThree,
    };
  },
  dangerouslyAllowMutability: true,
});
