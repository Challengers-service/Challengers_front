import Anchor from "components/@common/Anchor";
import GooggleLogin from "components/auth/GooggleLogin";
import LoginForm from "components/auth/LoginForm";
import * as Styled from "./LoginPageStyled";
import RocketPng from "assets/png/rocket.png";
import Contor from "components/auth/Contor";
import AuthFormLayout from "components/layouts/AuthFormLayout";

export default function LoginPage() {
  return (
    <AuthFormLayout
      leftImage={
        <img
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            maxWidth: "672px",
            backgroundColor: "#F3F5FA",
          }}
          src={RocketPng}
          alt="로켓"
        />
      }
      bgColor="#f3f5fa"
    >
      <LoginForm />
      <Styled.ExtraGroup>
        <Anchor text="계정이 없으신가요?" to="/join" />
        <Contor />
        <Styled.Gap gap="20px">
          <GooggleLogin />
          <Anchor text="아이디 ･ 비밀번호 찾기" to="/" />
        </Styled.Gap>
      </Styled.ExtraGroup>
    </AuthFormLayout>
  );
}
