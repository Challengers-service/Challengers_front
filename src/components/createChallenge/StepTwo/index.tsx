import Input from "components/@common/Input";
import Label from "components/@common/Label";
import Labelnput from "components/@common/Labelnput";
import Select from "components/@common/Select";
import Text from "components/@common/Text";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as ArrowIcon } from "assets/vectors/ArrowIcon.svg";
import * as Styled from "./StepTwoStyled";

interface IForm {
  name: string;
  userCountLimit: number;
  startDate: Date;
  endDate: Date;
}

const week = ["일", "월", "화", "수", "목", "금", "토"];
const options = new Array(1000).fill(0).map((_, index) => `${index + 1}`);

const StepTwo = () => {
  const { register, watch } = useForm<IForm>();
  const getDate = (date: Date) => week[new Date(date).getDay()];
  const getDatePlaceholder = (field: "startDate" | "endDate") => {
    return watch(field)
      ? `${watch(field)} (${getDate(watch(field))})`
      : `${getDatToISOString(new Date())} (${getDate(new Date())})`;
  };
  const getDatToISOString = (date: Date) =>
    new Date().toISOString().slice(0, 10);
  const [select, setSelect] = useState("선택");
  return (
    <Styled.Wrapper>
      <Styled.Stack
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
            trigger={
              <Styled.Select>
                <label>
                  <span>{select}</span>
                  <ArrowIcon />
                </label>
              </Styled.Select>
            }
            defaultValue="선택"
            onChange={setSelect}
            options={options}
          />
        </Styled.LabelSelect>
      </Styled.Stack>
      <Styled.Stack
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
      </Styled.Stack>
      <Styled.Stack style={{ gap: "17px", marginTop: "27px" }}>
        <Label labelText="챌린지 설명" isRequiredIcon />
      </Styled.Stack>
    </Styled.Wrapper>
  );
};

export default StepTwo;
