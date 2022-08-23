import Button from "components/@common/Button";
import DefaultTrigger from "components/@common/DefaultTrigger";
import Label from "components/@common/Label";
import Labelnput from "components/@common/Labelnput";
import Select from "components/@common/Select";
import Stack from "components/@common/Stack";
import { useForm } from "react-hook-form";
import useChallengeFrequency from "../hooks/useChallengeFrequency";
import * as Styled from "./StepThreeStyled";

interface IForm {
  depositPoint: number;
}
const StepThree = () => {
  const { register } = useForm<IForm>();
  const {
    selectFrequency,
    onChangeFrequency,
    frequencyOptions,
    selectTimesPerRound,
    onChangeTimesPerRound,
    timesPerRoundOptions,
    getCheckFrequencyType,
    getCheckTimesPerRound,
  } = useChallengeFrequency();

  // console.log(getCheckFrequencyType(selectFrequency), getCheckTimesPerRound());
  return (
    <Styled.Wrapper>
      <Stack style={{ alignItems: "flex-end", gap: "10px" }}>
        <Labelnput
          {...register("depositPoint", { required: true })}
          labelText="예치 포인트"
          isRequiredIcon
          isBorder
          placeholder="최대 0,000P 입력 가능"
          style={{ width: "300px" }}
        />
        <Button type="button" className="depositPoint_button" size="medium">
          전액 사용
        </Button>
      </Stack>
      <Stack
        style={{ marginTop: "60px", flexDirection: "column", gap: "17px" }}
      >
        <Label labelText="인증 빈도" isRequiredIcon />
        <Styled.ButtonGroup>
          <Select
            initialValue="매일"
            value={selectFrequency}
            onChange={onChangeFrequency as (select: string) => void}
            options={frequencyOptions}
            isAlwaysOpen
            type="button"
          />
          <Styled.SelectWrapper isOpen={selectFrequency === "직접입력"}>
            <div className="first_child">
              <Select
                trigger={
                  <DefaultTrigger
                    className="trigger"
                    value={selectTimesPerRound}
                  />
                }
                initialValue="0"
                value={selectTimesPerRound}
                onChange={onChangeTimesPerRound}
                options={timesPerRoundOptions}
              />
              <span>회</span>
            </div>
            <span>
              💡 기준: <strong>7일</strong>
            </span>
          </Styled.SelectWrapper>
        </Styled.ButtonGroup>
      </Stack>
    </Styled.Wrapper>
  );
};

export default StepThree;
