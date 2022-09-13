import { Pagination } from "../common-types";

export interface CreateChallengeParams {
  name: string;
  userCountLimit: number;
  startDate: string;
  endDate: string;
  introduction: string;
  depositPoint: number;
  challengeRule: string;
  examplePhotos: FileList;
  checkFrequencyType: string;
  checkTimesPerRound: number;
  category: CategoryType;
  tags?: string;
}

export type CheckFrequencyType = "EVERY_DAY" | "EVERY_WEEK" | "OTHERS";
export type CategoryType = "LIFE" | "STUDY" | "WORK_OUT" | "SELF_DEVELOPMENT";

export interface Challenge {
  id: number;
  hostId: number;
  hostProfileImageUrl: string;
  hostName: string;
  name: string;
  challengeRule: string;
  checkFrequencyType: CheckFrequencyType;
  checkTimesPerRound: number;
  category: CategoryType;
  startDate: string;
  endDate: string;
  depositPoint: number;
  introduction: string;
  userCountLimit: number;
  status: string;
  tags: [
    {
      id: number;
      name: string;
    },
    {
      id: number;
      name: string;
    }
  ];
  examplePhotos: string[];
  createdDate: string;
  userCount: number;
  starRating: number;
  reviewCount: number;
  cart: boolean;
  expectedReward: number;
  hasJoined: boolean;
}

export interface GetChallenge {
  challengeId: number;
  name: string;
  category: CategoryType;
  tags: string[];
  createdDate: string;
  remainingDays: number;
  cart: boolean;
  hasJoined: boolean;
  profileImgUrls: string[];
}

export interface GetChallengePaginationResult extends Pagination {
  content: GetChallenge[];
}

export type Tab = "popular" | "new";

export interface PaginationParams {
  page: number;
  size?: number;
  orderBy?: "desc" | "asc";
  tab?: Tab;
  challengeName?: string;
}
