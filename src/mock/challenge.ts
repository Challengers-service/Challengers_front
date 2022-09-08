import { Challenge, GetChallenge } from "lib/apis/challenge/types";
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

export const mock_detailChallenge: Challenge = {
  id: 1,
  hostId: 1,
  hostProfileImageUrl: DefaultAvatar,
  hostName: "챌린지 호스트 이름",
  name: "챌린지 이름",
  challengeRule: "챌린지 규칙",
  checkFrequencyType: "EVERY_DAY",
  checkTimesPerRound: 1,
  category: "LIFE",
  startDate: "2022-06-21",
  endDate: "2022-07-21",
  depositPoint: 1000,
  introduction: "챌린지 소개글",
  userCountLimit: 1000,
  status: "IN_PROGRESS",
  tags: [
    {
      id: 1,
      name: "미라클모닝",
    },
    {
      id: 2,
      name: "기상",
    },
  ],
  examplePhotos: [DefaultAvatar, DefaultAvatar],
  createdDate: "2022-01-01",
  userCount: 32,
  starRating: 3.5,
  reviewCount: 3,
  cart: false,
  hasJoined: false,
  expectedReward: 100,
};
