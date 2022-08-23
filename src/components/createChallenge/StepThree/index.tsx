import Button from "components/@common/Button";
import DefaultTrigger from "components/@common/DefaultTrigger";
import Label from "components/@common/Label";
import Labelnput from "components/@common/Labelnput";
import Select from "components/@common/Select";
import Stack from "components/@common/Stack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Styled from "./StepThreeStyled";

interface IForm {
  depositPoint: number;
}

const options2 = ["매일", "매주", "직접입력"];
const options = new Array(7).fill(0).map((_, index) => `${index + 1}`);

const StepThree = () => {
  const { register } = useForm<IForm>();
  const [focus, setFocus] = useState(false);
  const [select, setSelect] = useState("매일");
  const onChangeSelect = (newSelect: string) => {
    console.log(newSelect);
    setSelect(newSelect);
  };
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
            value={select}
            onChange={onChangeSelect}
            options={options2}
            isAlwaysOpen
            type="button"
          />
          {/* <Button type="button" size="medium">
            매일
          </Button>
          <Button type="button" size="medium">
            매주
          </Button> */}
          {/* <Styled.ButtonAndSelect>
            <Button onFocus={() => setFocus(true)} type="button" size="medium">
              직접 입력
            </Button>
            <Styled.SelectWrapper isOpen={focus}>
              <div className="first_child">
                <Select
                  trigger={
                    <DefaultTrigger className="trigger" value={select} />
                  }
                  initialValue="0"
                  value={select}
                  onChange={onChangeSelect}
                  options={options}
                />
                <span>회</span>
              </div>
              <span>
                💡 기준: <strong>7일</strong>
              </span>
            </Styled.SelectWrapper>
          </Styled.ButtonAndSelect> */}
        </Styled.ButtonGroup>
      </Stack>
    </Styled.Wrapper>
  );
};

export default StepThree;
