export interface JoinParams {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export type AwardList =
  | "ONE_PARTICIPATION"
  | "FIFTY_PARTICIPATION"
  | "PERFECT_ATTENDANCE";

export interface User {
  id: number;
  email: string;
  name: string;
  image: string;
  bio: string;
  followerCount: number;
  followingCount: number;
  awardList: AwardList[];
}
