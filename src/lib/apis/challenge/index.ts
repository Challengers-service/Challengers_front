import { apiClient } from "constants/api";
import {
  Challenge,
  CreateChallengeParams,
  GetChallengePaginationResult,
  PaginationParams,
} from "./types";

export const postChallege = async (params: CreateChallengeParams) => {
  const formData = new FormData();
  (Object.keys(params) as (keyof typeof params)[]).forEach((key, _) => {
    if (params[key] === undefined) return;
    switch (key) {
      case "examplePhotos":
        [].forEach.call(params[key], f => {
          formData.append("examplePhotos", f);
        });
        break;
      default:
        formData.append(`${key}`, String(params[key]));
        break;
    }
  });
  formData.append("photoDescription", "TEST");
  const response = await apiClient.post("/api/challenge", formData);
  return response.data;
};

export const getChallenges = async ({
  page,
  size = 9,
  orderBy = "desc",
  tab,
  challengeName,
}: PaginationParams) => {
  const sortTab = tab === "popular" ? "userCount" : "id";
  const response = await apiClient.get<GetChallengePaginationResult>(
    `/api/challenge`,
    {
      params: {
        page,
        size,
        sort: `${sortTab},${orderBy}`,
        challengeName,
      },
    }
  );
  return response.data;
};

export const getChallengeWithId = async (challengeId: number) => {
  const response = await apiClient.get<Challenge>(
    `/api/challenge/${challengeId}`
  );
  return response.data;
};

export const likeChallenge = async (challengeId: number) => {
  const response = await apiClient.post(`/api/cart/${challengeId}`);
  return response.data;
};

export const unlikeChallenge = async (challengeId: number) => {
  const response = await apiClient.delete(`/api/cart/${challengeId}`);
  return response.data;
};
