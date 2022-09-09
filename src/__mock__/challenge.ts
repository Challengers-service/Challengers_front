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
  hostName: "라이언",
  name: "Miracle Morning",
  challengeRule: "챌린지 규칙",
  checkFrequencyType: "EVERY_DAY",
  checkTimesPerRound: 1,
  category: "LIFE",
  startDate: "2022-06-21",
  endDate: "2022-07-21",
  depositPoint: 1000,
  introduction:
    "당신의 하루를 바꾸는 기적, 단 6분. 이른 아침, 누구의 방해도 받지 않는 시간에 온전히 당신에게 집중할 시간을 가져보세요. 미라클 모닝은 시간을 주체적으로 활용하고, 삶에 여러가지 습관을 더할 수 있게 해요 :)",
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
