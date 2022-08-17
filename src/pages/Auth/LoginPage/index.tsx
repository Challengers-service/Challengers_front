import Anchor from "components/@common/Anchor";
import GooggleLogin from "components/auth/GooggleLogin";
import LoginForm from "components/auth/LoginForm";
import * as Styled from "./LoginPageStyled";
import RocketPng from "assets/png/rocket.png";
import Contor from "components/auth/Contor";
import { useEffect, useState } from "react";

const Login = () => {
  return (
    <Styled.StyledLogin>
      <LoginForm />
      <Styled.ExtraGroup>
        <Anchor text="계정이 없으신가요?" to="/join" />
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

const ENDPOINT = 1130;

export default function LoginPage() {
  const [windowInnerWith, setWindowInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowInnerWidth(window.innerWidth);
    });
  }, [windowInnerWith]);
  return (
    <Styled.StyledLoginPage>
      {windowInnerWith >= ENDPOINT && <RocketImg />}
      <Login />
    </Styled.StyledLoginPage>
  );
}
