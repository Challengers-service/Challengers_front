import Button from "components/@common/Button";
import Labelnput from "components/@common/Labelnput";
import Auth from "lib/apis/auth";
import { JoinParams } from "lib/apis/auth/types";
import { useForm } from "react-hook-form";
import { useInternalRouter } from "hooks/useInternalRouter";
import * as Styled from "./JoinFormStyled";
import Text from "components/@common/Text";

export default function JoinForm() {
  const router = useInternalRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<JoinParams>({ mode: "onChange" });

  const onSubmit = (data: JoinParams) => {
    Auth.join(data)
      .then(() => router.push("/login"))
      .catch(error => console.log(error.response.data));
  };

  return (
    <Styled.StyledJoinForm onSubmit={handleSubmit(onSubmit)}>
      <Styled.TextGroup>
        <Text typography="h1">Welcome!</Text>
        <Text typography="subTitle">지금 가입하고 챌린지에 참여해 보세요!</Text>
      </Styled.TextGroup>
      <Styled.InputGroup>
        <Labelnput
          {...register("email", { required: "이메일을 입력해 주세요." })}
          type={"email"}
          labelText="아이디"
          errorMessage={errors.email?.message}
          isError={Boolean(errors.email?.message)}
          isFocusActiveStyle={true}
          placeholder="아이디를 입력하세요."
        />
        <Labelnput
          {...register("name", { required: "이름을 입력해 주세요." })}
          labelText="닉네임"
          errorMessage={errors.name?.message}
          isError={Boolean(errors.name?.message)}
          isFocusActiveStyle={true}
          placeholder="닉네임을 입력하세요."
        />
        <Labelnput
          {...register("password", { required: "비밀번호를 입력해 주세요." })}
          type={"password"}
          labelText="비밀번호"
          errorMessage={errors.password?.message}
          isError={Boolean(errors.password?.message)}
          isFocusActiveStyle={true}
          placeholder="비밀번호를 입력하세요."
        />
        <Labelnput
          {...register("passwordConfirm", {
            required: "비밀번호 확인을 입력해 주세요.",
            validate: value =>
              value !== watch("password")
                ? "비밀번호 확인이 틀렸습니다. 다시 입력해 주세요."
                : true,
          })}
          type={"password"}
          labelText="비밀번호 확인"
          errorMessage={errors.passwordConfirm?.message}
          isError={Boolean(errors.passwordConfirm?.message)}
          isFocusActiveStyle={true}
          placeholder="비밀번호 확인을 입력해 주세요."
        />
      </Styled.InputGroup>
      <Button
        type="submit"
        size="large"
        fullWidth={true}
        disabled={!isDirty || !isValid}
      >
        Sign Up
      </Button>
    </Styled.StyledJoinForm>
  );
}
