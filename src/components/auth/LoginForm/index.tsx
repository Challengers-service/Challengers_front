import Button from "components/@common/Button";
import Text from "components/@common/Text";
import Auth from "apis/auth";
import { LoginParams } from "apis/auth/params.interface";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import {
  ACCESS_TOKEN_KEY,
  isLoggedAtom,
  REFRESH_TOKEN_KEY,
  accessTokenAtom,
  refreshTokenAtom,
} from "stores/auth";
import { InputGroup, StyledLoginForm } from "./LoginFormStyled";
import Input from "components/@common/Input";
import { useInternalRouter } from "hooks/useInternalRouter";

export interface LoginFormProps {}

export default function LoginForm() {
  const setIsLogged = useSetRecoilState(isLoggedAtom);
  const setAccessToken = useSetRecoilState(accessTokenAtom);
  const setRefreshToken = useSetRecoilState(refreshTokenAtom);

  const router = useInternalRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({ mode: "onChange" });

  const onSubmit = (data: LoginParams) => {
    Auth.login(data)
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refreshToken);
        setIsLogged(true);
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        router.push("/");
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
