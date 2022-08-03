import Button from "components/@common/Button";
import Text from "components/@common/Text";
import Labelnput from "components/@common/Labelnput";
import Auth, { TOKEN_KEY } from "apis/auth";
import { LoginParams } from "apis/auth/params.interface";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { isLoggedAtom, tokenAtom } from "stores/auth";
import { useInternalRouter } from "utils/routing";
import { StyledLoginForm } from "./LoginFormStyled";

export interface LoginFormProps {}

export default function LoginForm() {
  const setIsLogged = useSetRecoilState(isLoggedAtom);
  const setToken = useSetRecoilState(tokenAtom);
  const {
    register,
    handleSubmit,
    watch,
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
  console.log(watch("email"));
  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <div className="loginFormInput">
        <Labelnput
          {...register("email", { required: "이메일을 입력해주세요" })}
          labelText="email"
          type={"email"}
        />
        <Text color="red" typography="h5">
          {errors.email?.message}
        </Text>
      </div>
      <div className="loginFormInput">
        <Labelnput
          {...register("password", { required: "비밀번호를 입력해주세요" })}
          labelText="password"
          type={"password"}
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
