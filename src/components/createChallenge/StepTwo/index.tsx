import Input from "components/@common/Input";
import Label from "components/@common/Label";
import Labelnput from "components/@common/Labelnput";
import Select from "components/@common/Select";
import Text from "components/@common/Text";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReactComponent as ArrowIcon } from "assets/vectors/ArrowIcon.svg";
import * as Styled from "./StepTwoStyled";
import Textarea from "components/@common/Textarea";
import { CHALLENGE_DESCRIPTION } from "constants/placeholder";
import Button from "components/@common/Button";
import { useInternalRouter } from "hooks/useInternalRouter";
import { useSetRecoilState } from "recoil";
import { challengeStepTwoAtom } from "stores/challenge";
import Stack from "components/@common/Stack";
import DefaultTrigger from "components/@common/DefaultTrigger";

interface IForm {
  name: string;
  userCountLimit: number;
  startDate: string;
  endDate: string;
  introduction: string;
}

const week = ["일", "월", "화", "수", "목", "금", "토"];
const options = new Array(1000).fill(0).map((_, index) => `${index + 1}`);
const offset = new Date().getTimezoneOffset() * 60000;
const getDatToISOString = (date: Date) => date.toISOString().slice(0, 10);
const getDate = (date: string) => week[new Date(date).getDay()];
const currentDate = Date.now() - offset;
const nextDate = Date.now() - offset - new Date().getTimezoneOffset() * 160000;

const StepTwo = () => {
  const router = useInternalRouter();
  const setChallengeStepTwo = useSetRecoilState(challengeStepTwoAtom);

  const [select, setSelect] = useState("선택");
  const { register, watch, handleSubmit, setValue } = useForm<IForm>({
    defaultValues: {
      startDate: getDatToISOString(new Date(currentDate)),
      endDate: getDatToISOString(new Date(nextDate)),
    },
  });

  const getDatePlaceholder = (field: "startDate" | "endDate") => {
    return `${watch(field)} (${getDate(watch(field))})`;
  };

  const onSubmit: SubmitHandler<IForm> = data => {
    if (!watch("userCountLimit")) return;
    setChallengeStepTwo(data);
    router.push("/create-challenge/three");
  };

  useEffect(() => {
    setValue("userCountLimit", Number(select));
  }, [select]);

  return (
    <Styled.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Stack
        style={{
          gap: "60px",
        }}
      >
        <Labelnput
          {...register("name", {
            required: true,
          })}
          labelText="챌린지명"
          isRequiredIcon
          isBorder
          placeholder="챌린지명을 입력하세요."
          width="430px"
        />
        <Styled.LabelSelect>
          <Styled.LabelMessageGroup>
            <Label labelText="참여인원" isRequiredIcon />
            <Styled.RequiredMessage>
              💡 최소 참여 인원: <strong>1인</strong>
            </Styled.RequiredMessage>
          </Styled.LabelMessageGroup>
          <Select
            trigger={<DefaultTrigger value={select} />}
            defaultValue="선택"
            onChange={setSelect}
            options={options}
          />
        </Styled.LabelSelect>
      </Stack>
      <Stack
        style={{
          marginTop: "60px",
          flexDirection: "column",
          gap: "17px",
        }}
      >
        <Label labelText="챌린지 기간" isRequiredIcon />
        <Styled.TextInputGroup>
          <Styled.TextInput>
            <Text color="#333333">시작일</Text>
            <Input
              {...register("startDate", {
                required: true,
              })}
              type={"date"}
              dataPlaceHolder={getDatePlaceholder("startDate")}
              isBorder
              style={{ width: "220px" }}
            />
          </Styled.TextInput>
          <Text color="#333333">~</Text>
          <Styled.TextInput>
            <Text color="#333333">종료일</Text>
            <Input
              {...register("endDate", {
                required: true,
              })}
              type={"date"}
              dataPlaceHolder={getDatePlaceholder("endDate")}
              isBorder
              style={{ width: "220px" }}
            />
          </Styled.TextInput>
        </Styled.TextInputGroup>
        <Text typography="subTitle" fontSize="15px">
          💡 챌린지가 열리고 닫히는 기간입니다. 챌린지 시작일 이후 챌린지 내용을
          수정할 수 없습니다.
        </Text>
        <Text color="#FF0000" fontSize="15px">
          *시작일 기본 고정 : 오늘 날짜
        </Text>
      </Stack>
      <Stack
        style={{ flexDirection: "column", gap: "17px", marginTop: "27px" }}
      >
        <Label labelText="챌린지 설명" isRequiredIcon />
        <Textarea
          {...register("introduction", {
            required: true,
          })}
          placeholder={CHALLENGE_DESCRIPTION}
        />
      </Stack>
      <Stack style={{ marginTop: "101px" }}>
        <Styled.ButtonGroup style={{ flex: 1 }}>
          <Button
            onClick={router.goBack}
            type="button"
            className="prev_button"
            size="medium"
          >
            이전
          </Button>
        </Styled.ButtonGroup>
        <Styled.ButtonGroup>
          <Button type="button" className="save_button" size="medium">
            임시 저장
          </Button>
          <Button type="submit" className="next_button" size="medium">
            다음
          </Button>
        </Styled.ButtonGroup>
      </Stack>
    </Styled.Wrapper>
  );
};

export default StepTwo;
