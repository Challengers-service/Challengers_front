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
  examplePhotos: FileList;
  checkFrequencyType: string;
  checkTimesPerRound: number;
  category: CategoryType;
}
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
  const response = await axios.post("/api/challenge", formData);
  return response.data;
};
