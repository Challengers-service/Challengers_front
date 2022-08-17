import { useRecoilValue } from "recoil";
import { challengeStepAtom } from "stores/challenge";
import * as Styled from "./ChallengeStepStyled";

const steps = ["카테고리 정하기", "정보 입력하기", "규칙 정하기", "Success!"];

const ChallengeStep = () => {
  const challengeStep = useRecoilValue(challengeStepAtom);
  return (
    <Styled.Wrapper step={challengeStep}>
      {steps.map((step, index) => (
        <Styled.Step key={step} className={`step${index + 1}`}>
          {index > 0 && <Styled.Line className="step_line" />}
          <Styled.StepNameWrapper>
            <Styled.Circle className="step_circle" />
            <Styled.Title className="step_title">{step}</Styled.Title>
          </Styled.StepNameWrapper>
        </Styled.Step>
      ))}
    </Styled.Wrapper>
  );
};

export default ChallengeStep;
