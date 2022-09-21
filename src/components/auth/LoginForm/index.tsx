import Button from "components/@common/Button";
import Text from "components/@common/Text";
import Auth from "lib/apis/auth";
import { LoginParams } from "lib/apis/auth/types";
import { useForm } from "react-hook-form";
import { InputGroup, StyledLoginForm } from "./LoginFormStyled";
import Input from "components/@common/Input";
import { useInternalRouter } from "hooks/useInternalRouter";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "constants/token";
import { useQueryClient } from "@tanstack/react-query";
import usePasswordType from "hooks/usePasswordType";

export interface LoginFormProps {}

export default function LoginForm() {
  const queryClient = useQueryClient();
  const router = useInternalRouter();
  const { passwordType, icon } = usePasswordType();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginParams>({ mode: "onChange" });

  const onSubmit = (data: LoginParams) => {
    Auth.login(data)
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refreshToken);
        queryClient.invalidateQueries();
        router.push("/");
      })
      .catch(error => console.log(error.response.data));
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Text typography="h1">Login</Text>
      <InputGroup>
        <Input
          {...register("email", { required: "이메일을 입력해 주세요." })}
          type={"email"}
          placeholder={"이메일을 입력하세요."}
          errorMessage={errors.email?.message}
          isError={Boolean(errors.email?.message)}
          isFocusActiveStyle={true}
        />
        <Input
          {...register("password", { required: "비밀번호를 입력해 주세요." })}
          type={passwordType}
          placeholder={"비밀번호를 입력하세요."}
          errorMessage={errors.password?.message}
          isError={Boolean(errors.password?.message)}
          isFocusActiveStyle={true}
          icon={icon}
        />
      </InputGroup>
      <Button
        type="submit"
        size="large"
        fullWidth={true}
        disabled={!isDirty || !isValid}
      >
        Log In
      </Button>
    </StyledLoginForm>
  );
}
