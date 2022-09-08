import { CheckFrequencyType } from "lib/apis/challenge/types";
import { useCallback, useState } from "react";

type FrequencyOptionType = "매일" | "매주" | "직접입력";
const frequencyOptions: FrequencyOptionType[] = ["매일", "매주", "직접입력"];
const checkFrequencyType: Record<FrequencyOptionType, CheckFrequencyType> = {
  매일: "EVERY_DAY",
  매주: "EVERY_WEEK",
  직접입력: "OTHERS",
};
const timesPerRoundOptions = new Array(7)
  .fill(0)
  .map((_, index) => `${index + 1}`);

const useChallengeFrequency = () => {
  const [selectFrequency, setSelectFrequency] =
    useState<FrequencyOptionType>("매일");
  const [selectTimesPerRound, setSelectTimesPerRound] = useState("1");

  const onChangeFrequency = (frequencyType: FrequencyOptionType) => {
    setSelectFrequency(frequencyType);
  };
  const onChangeTimesPerRound = (timesPerRound: string) => {
    setSelectTimesPerRound(timesPerRound);
  };

  const getCheckFrequencyType = useCallback((select: FrequencyOptionType) => {
    return checkFrequencyType[select];
  }, []);

  const getCheckTimesPerRound = useCallback(() => {
    return selectFrequency === "직접입력" ? Number(selectTimesPerRound) : 1;
  }, [selectFrequency, selectTimesPerRound]);

  return {
    selectFrequency,
    selectTimesPerRound,
    onChangeFrequency,
    onChangeTimesPerRound,
    frequencyOptions,
    timesPerRoundOptions,
    getCheckFrequencyType,
    getCheckTimesPerRound,
  };
};

export default useChallengeFrequency;
