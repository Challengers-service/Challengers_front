import axios from "axios";
import { CategoryType } from "constants/category";

interface CreateChallengeParams {
  name: string;
  userCountLimit: number;
  startDate: string;
  endDate: string;
  introduction: string;
  depositPoint: number;
  challengeRule: string;
  examplePhotos: FileList | null;
  CheckFrequencyType: string;
  CheckTimesPerRound: number;
  category: CategoryType;
}

export const postChallege = async (params: CreateChallengeParams) => {
  const response = await axios.post(
    "/api/challenge",
    { ...params, photoDescription: "테스트" },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
