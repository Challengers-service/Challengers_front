import { postChallege } from "lib/apis/challenge";
import defaultCheckImage from "assets/png/defaultCheckImage.png";
import Button from "components/@common/Button";
import DefaultTrigger from "components/@common/DefaultTrigger";
import Input from "components/@common/Input";
import Label from "components/@common/Label";
import Labelnput from "components/@common/Labelnput";
import Select from "components/@common/Select";
import Stack from "components/@common/Stack";
import Textarea from "components/@common/Textarea";
import { CHALLENGE_RULE } from "constants/placeholder";
import { useInternalRouter } from "hooks/useInternalRouter";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  challengeStepAtom,
  challengeStepThreeAtom,
  createChallengeSelector,
} from "stores/challenge";
import ButtonGroupStack from "../ButtonGroupStack";
import useChallengeFrequency from "../hooks/useChallengeFrequency";
import * as Styled from "./StepThreeStyled";

interface IForm {
  depositPoint: number;
  challengeRule: string;
  examplePhotos: FileList;
}
const StepThree = () => {
  const router = useInternalRouter();
  const isCallAPI = useRef(false);

  const createChallenge = useRecoilValue(createChallengeSelector);

  const setChallengeStep = useSetRecoilState(challengeStepAtom);
  const setChallengeStepThree = useSetRecoilState(challengeStepThreeAtom);

  const { register, watch, setValue, handleSubmit } = useForm<IForm>();

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
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickButton = () => {
    inputRef.current && inputRef.current.click();
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      if (e.target.files.length > 3) alert("최대 3장");
      else setValue("examplePhotos", e.target.files);
    }
  };
  const onSubmit: SubmitHandler<IForm> = data => {
    setChallengeStepThree({
      ...data,
      checkFrequencyType: getCheckFrequencyType(selectFrequency),
      checkTimesPerRound: getCheckTimesPerRound(),
    });
    isCallAPI.current = true;
  };

  useEffect(() => {
    if (isCallAPI.current && createChallenge !== null) {
      postChallege(createChallenge).then(() => {
        setChallengeStep(4);
        router.push("/create-challenge/finish");
      });
    }
  }, [createChallenge]);
  return (
    <Styled.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Stack style={{ alignItems: "flex-end", gap: "10px" }}>
        <Labelnput
          {...register("depositPoint", { required: true })}
          labelText="예치 포인트"
          isRequiredIcon
          isBorder
          placeholder="최대 0,000P 입력 가능"
          style={{ width: "300px" }}
          type="number"
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
      <Stack
        style={{ marginTop: "89px", flexDirection: "column", gap: "17px" }}
      >
        <Label labelText="도전 규칙" isRequiredIcon />
        <Textarea
          {...register("challengeRule", { required: true })}
          placeholder={CHALLENGE_RULE}
        />
      </Stack>
      <Stack
        style={{ marginTop: "60px", flexDirection: "column", gap: "17px" }}
      >
        <Label labelText="인증사진 예시" subText="(최대 3장)" />
        <Styled.FileButtonWrapper>
          <Button
            className="file_button"
            type="button"
            size="medium"
            onClick={onClickButton}
          >
            파일 선택
          </Button>
          <Input
            {...register("examplePhotos")}
            multiple
            ref={inputRef}
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileSelected}
          />
          <Styled.SelectFiles>
            {watch("examplePhotos") &&
              Array.from(watch("examplePhotos") as FileList).map(
                (file, index) => (
                  <Styled.SelectFile key={index}>{file.name}</Styled.SelectFile>
                )
              )}
          </Styled.SelectFiles>
          <Styled.DefaultImageWrapper>
            <Styled.DefaultImage src={defaultCheckImage} />
            <span>
              💡 인증사진 미업로드시 <strong>기본 이미지가 제공</strong>됩니다.
            </span>
          </Styled.DefaultImageWrapper>
        </Styled.FileButtonWrapper>
      </Stack>
      <ButtonGroupStack />
    </Styled.Wrapper>
  );
};

export default StepThree;
