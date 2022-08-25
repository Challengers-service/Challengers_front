import * as Styled from "./CreateChallengBoxStyled";
import RocketPng from "assets/png/smallRocket.png";
import { ReactComponent as RocketShadow } from "assets/vectors/RocketShadow.svg";
import { ReactComponent as WriteIcon } from "assets/vectors/WriteIcon.svg";
import Text from "../Text";
import Button from "../Button";
import { useInternalRouter } from "hooks/useInternalRouter";

const CreateChallengBox = () => {
  const router = useInternalRouter();
  const onClick = () => router.push("/create-challenge/one");
  return (
    <Styled.Wrapper>
      <Styled.Rocket>
        <img src={RocketPng} alt="rocket" />
        <RocketShadow />
      </Styled.Rocket>
      <Styled.TextWrapper>
        <Text typography="h4">챌린지를 만들어 보세요!</Text>
        <Text typography="subTitle">나만의 챌린지를 만들고</Text>
        <Text typography="subTitle">사람들과 함께 도전해 보세요.</Text>
      </Styled.TextWrapper>
      <Button
        fullWidth={true}
        size="large"
        type="button"
        style={{
          height: "53px",
          borderRadius: "13px",
          display: "flex",
          gap: "5px",
          fontSize: "16px",
        }}
      >
        <WriteIcon />
        <span onClick={onClick}>Create Now!</span>
      </Button>
    </Styled.Wrapper>
  );
};

export default CreateChallengBox;
