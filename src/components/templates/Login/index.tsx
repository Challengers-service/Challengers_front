import Text from "@atoms/Text";
import LoginForm from "@organisms/LoginForm";
import { StyledLogin } from "./LoginStyled";

export interface LoginProps {}

export default function Login(props: LoginProps) {
  return (
    <StyledLogin>
      <Text typography="h1">Login</Text>
      <LoginForm />
    </StyledLogin>
  );
}
