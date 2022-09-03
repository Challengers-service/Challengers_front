import axios from "axios";
import {
  CreateChallengeParams,
  GetChallengeResult,
  PaginationParams,
  Tab,
} from "./types";

export const postChallege = async (params: CreateChallengeParams) => {
  const formData = new FormData();
  (Object.keys(params) as (keyof typeof params)[]).forEach((key, _) => {
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
  const response = await axios.post("/api/challenge", formData);
  return response.data;
};

export const getChallenge = async ({
  page,
  size = 9,
  orderBy = "desc",
  tab,
  challengeName,
}: PaginationParams) => {
  const sortTab = tab === "popular" ? "userCount" : "id";
  const response = await axios.get<GetChallengeResult>(`/api/challenge`, {
    params: {
      page,
      size,
      sort: `${sortTab},${orderBy}`,
      challengeName,
    },
  });
  return response.data;
};
