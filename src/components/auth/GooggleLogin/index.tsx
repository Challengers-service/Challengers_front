import Button from "components/@common/Button";
import * as Styled from "./styled";
import { ReactComponent as GoogleIcon } from "assets/vectors/GoogleIcon.svg";

const GooggleLogin = () => {
  return (
    <Styled.GoogleLogin>
      <a href="https://serverus.net/oauth2/authorize/google?redirect_uri=http://localhost:3000">
        <Button size="large" type="button" mode="social" fullWidth={true}>
          <Styled.TextWrapper>
            <GoogleIcon /> <span>Log in with Google</span>
          </Styled.TextWrapper>
        </Button>
      </a>
    </Styled.GoogleLogin>
  );
};

export default GooggleLogin;
