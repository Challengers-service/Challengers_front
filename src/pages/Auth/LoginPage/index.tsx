import Anchor from "components/@common/Anchor";
import Text from "components/@common/Text";
import GooggleLogin from "components/auth/GooggleLogin";
import LoginForm from "components/auth/LoginForm";
import { pallet } from "constants/pallet";
import * as Styled from "./LoginPageStyled";
import RocketPng from "assets/png/rocket.png";

const Contor = () => {
  return (
    <Styled.Contour>
      <Styled.Line />
      <Text color={pallet.baseColor.subText} typography="h5">
        OR
      </Text>
      <Styled.Line />
    </Styled.Contour>
  );
};

const Login = () => {
  return (
    <Styled.StyledLogin>
      <LoginForm />
      <Styled.ExtraGroup>
        <Anchor text="계정이 없으신가요?" to="/" />
        <Contor />
        <Styled.Gap gap="20px">
          <GooggleLogin />
          <Anchor text="아이디 ･ 비밀번호 찾기" to="/" />
        </Styled.Gap>
      </Styled.ExtraGroup>
    </Styled.StyledLogin>
  );
};

const RocketImg = () => {
  return (
    <Styled.RocketBG>
      <img
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          maxWidth: "672px",
          backgroundColor: "#F3F5FA",
        }}
        src={RocketPng}
      />
    </Styled.RocketBG>
  );
};

export default function LoginPage() {
  return (
    <Styled.StyledLoginPage>
      <RocketImg />
      <Login />
    </Styled.StyledLoginPage>
  );
}
