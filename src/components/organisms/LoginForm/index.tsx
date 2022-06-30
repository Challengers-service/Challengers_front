import Button from "@atoms/Button";
import Text from "@atoms/Text";
import Labelnput from "@molecules/Labelnput";
import Auth from "apis/auth";
import { LoginParams } from "apis/auth/params.interface";
import { useForm } from "react-hook-form";
import { useInternalRouter } from "utils/routing";
import { StyledLoginForm } from "./LoginFormStyled";

export interface LoginFormProps {}

export default function LoginForm() {
  const router = useInternalRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({ mode: "onChange" });

  const onSubmit = (data: LoginParams) => {
    Auth.login(data)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response.data));
  };
  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <div className="loginFormInput">
        <Labelnput
          register={{
            ...register("email", { required: "이메일을 입력해주세요" }),
          }}
          labelText="email"
          type="email"
        />
        <Text color="red" typography="h5">
          {errors.email?.message}
        </Text>
      </div>
      <div className="loginFormInput">
        <Labelnput
          register={{
            ...register("password", { required: "비밀번호를 입력해주세요" }),
          }}
          labelText="password"
          type="password"
        />
        <Text color="red" typography="h5">
          {errors.password?.message}
        </Text>
      </div>
      <Button type="submit" size="large" fullWidth={true}>
        Log In
      </Button>
    </StyledLoginForm>
  );
}
