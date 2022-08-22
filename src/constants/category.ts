import { Props as CategoryCardProps } from "components/createChallenge/CategoryCard";
import lifePng from "assets/png/life.png";
import studyPng from "assets/png/study.png";
import workOutPng from "assets/png/workOut.png";
import selfDevelopmentPng from "assets/png/selfDevelopment.png";

export type CategoryType = "LIFE" | "STUDY" | "WORK_OUT" | "SELF_DEVELOPMENT";

export const categories: CategoryType[] = [
  "LIFE",
  "STUDY",
  "WORK_OUT",
  "SELF_DEVELOPMENT",
];

export const categoryCards: Record<CategoryType, CategoryCardProps> = {
  LIFE: {
    imgUrl: lifePng,
    koreaTitle: "라이프",
    englishTitle: "Life",
  },
  STUDY: {
    imgUrl: studyPng,
    koreaTitle: "공부",
    englishTitle: "Study",
  },
  WORK_OUT: {
    imgUrl: workOutPng,
    koreaTitle: "운동",
    englishTitle: "Work Out",
  },
  SELF_DEVELOPMENT: {
    imgUrl: selfDevelopmentPng,
    koreaTitle: "자기계발",
    englishTitle: "Self-development",
  },
};