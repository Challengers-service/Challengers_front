import { GetChallenge } from "lib/apis/challenge/types";
import DefaultAvatar from "assets/png/DefaultAvatar.png";

export const mock_getChallenge: GetChallenge = {
  challengeId: 1,
  name: "매일 2시간 운동하기!",
  category: "LIFE",
  tags: ["미라클모닝", "취미", "자기개발"],
  createdDate: "2022.07.02",
  remainingDays: 10,
  cart: false,
  hasJoined: false,
  profileImgUrls: [DefaultAvatar, DefaultAvatar],
};

export const mock_getChallenges: GetChallenge[] = new Array(10).fill(
  mock_getChallenge
);
