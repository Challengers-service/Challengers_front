import Labelnput from "components/@common/Labelnput";
import { useForm } from "react-hook-form";
import * as Styled from "./StepTwoStyled";

interface IForm {
  name: string;
  userCountLimit: number;
}

const StepTwo = () => {
  const { register } = useForm<IForm>();
  return (
    <Styled.Wrapper>
      <Labelnput
        {...register("name")}
        labelText="챌린지명"
        isRequiredIcon
        placeholder="챌린지명을 입력하세요."
      />
    </Styled.Wrapper>
  );
};

export default StepTwo;
