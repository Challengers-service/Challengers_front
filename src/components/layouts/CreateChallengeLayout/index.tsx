import SideBar from "components/@common/SideBar";
import ChallengeStep from "components/createChallenge/ChallengeStep";
import { Outlet } from "react-router";
import { useRecoilValue } from "recoil";
import { challengeStepAtom } from "stores/challenge";
import { ReactComponent as CancelIcon } from "assets/vectors/CancelIcon.svg";
import * as Styled from "./CreateChallengeLayoutStyled";
import { useInternalRouter } from "utils/routing";

const step = {
  "1": {
    title: "생성하고자 하는 챌린지의 카테고리를 선택해주세요.",
    subtitle: "What kind of challenge are you planning?",
  },
  "2": {
    title: "생성하고자 하는 챌린지의 정보를 입력해주세요.",
    subtitle: "What’s the name of your challenge?",
  },
  "3": {
    title: "생성하고자 하는 챌린지의 자세한 규칙을 설정해주세요.",
    subtitle: "It’s time to enter the details",
  },
  "4": {
    title: "챌린지 생성이 완료되었습니다!",
    subtitle: "Congratulations! Your challenge has benn created.",
  },
};

const CreateChallengeLayout = () => {
  const router = useInternalRouter();
  const challengeStep = useRecoilValue(challengeStepAtom);
  return (
    <Styled.Wrapper>
      <Styled.SideBarWrapper>
        <SideBar />
      </Styled.SideBarWrapper>
      <Styled.ChallengeStepWrapper>
        <ChallengeStep />
      </Styled.ChallengeStepWrapper>
      <Styled.StepWrapper>
        <Styled.TextGroup>
          <Styled.Text
            style={{
              marginBottom: "40px",
            }}
            fontSize="15px"
          >
            Step {challengeStep}
          </Styled.Text>
          <Styled.Title>{step[challengeStep].title}</Styled.Title>
          <Styled.Text fontSize="17px">
            {step[challengeStep].subtitle}
          </Styled.Text>
        </Styled.TextGroup>
        <Outlet />
      </Styled.StepWrapper>
      <CancelIcon
        onClick={router.goBack}
        className="createChallengeLayout_cancelIcon"
      />
    </Styled.Wrapper>
  );
};

export default CreateChallengeLayout;
