import JoinForm from "components/auth/JoinForm";
import AuthFormLayout from "components/layouts/AuthFormLayout";
import joinPNG from "assets/png/joinBG.png";
export default function JoinPage() {
  return (
    <AuthFormLayout
      leftImage={
        <img
          style={{
            position: "absolute",
            top: "19%",
            left: 0,
            maxWidth: "672px",
            background: "rgb(101,99,255)",
          }}
          src={joinPNG}
          alt="로켓"
        />
      }
      bgColor="rgb(101,99,255)"
    >
      <JoinForm />
    </AuthFormLayout>
  );
}
