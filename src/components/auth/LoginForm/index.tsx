import Button from "components/@common/Button";
import Text from "components/@common/Text";
import Auth, { TOKEN_KEY } from "apis/auth";
import { LoginParams } from "apis/auth/params.interface";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { isLoggedAtom, tokenAtom } from "stores/auth";
import { InputGroup, StyledLoginForm } from "./LoginFormStyled";
import Input from "components/@common/Input";

export interface LoginFormProps {}

export default function LoginForm() {
  const setIsLogged = useSetRecoilState(isLoggedAtom);
  const setToken = useSetRecoilState(tokenAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({ mode: "onChange" });

  const onSubmit = (data: LoginParams) => {
    Auth.login(data)
      .then(response => {
        localStorage.setItem(TOKEN_KEY, response.data.token);
        setIsLogged(true);
        setToken(response.data.token);
      })
      .catch(error => console.log(error.response.data));
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Text typography="h1">Login</Text>
      <InputGroup>
        <Input
          {...register("email", { required: "이메일을 입력해주세요" })}
          type={"email"}
          placeholder={"이메일을 입력하세요."}
          errorMessage={errors.email?.message}
        />
        <Input
          {...register("password", { required: "비밀번호를 입력해주세요" })}
          type={"password"}
          placeholder={"비밀번호를 입력하세요."}
          errorMessage={errors.password?.message}
        />
      </InputGroup>
      <Button type="submit" size="large" fullWidth={true}>
        Log In
      </Button>
    </StyledLoginForm>
  );
}
