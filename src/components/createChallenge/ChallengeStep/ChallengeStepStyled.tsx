import { ChallengeStepType } from "stores/challenge";
import styled, { css } from "styled-components";

const StepStyles = css<{ step: ChallengeStepType }>`
  ${props =>
    props.step >= 1 &&
    css`
      .step1 {
        .step_circle,
        .step_line {
          background: #6563ff;
        }
        .step_title {
          color: #6563ff;
        }
      }
    `}
  ${props =>
    props.step >= 2 &&
    css`
      .step2 {
        .step_circle,
        .step_line {
          background: #6563ff;
        }
        .step_title {
          color: #6563ff;
        }
      }
    `}
  ${props =>
    props.step >= 3 &&
    css`
      .step3 {
        .step_circle,
        .step_line {
          background: #6563ff;
        }
        .step_title {
          color: #6563ff;
        }
      }
    `}
  ${props =>
    props.step >= 4 &&
    css`
      .step4 {
        .step_circle,
        .step_line {
          background: #6563ff;
        }
        .step_title {
          color: #6563ff;
        }
      }
    `}
`;

export const Wrapper = styled.div<{ step: ChallengeStepType }>`
  width: 100%;
  display: flex;
  ${StepStyles}
`;

export const Step = styled.div`
  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  flex: 1;
`;

export const StepNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: -0.005em;

  color: #b7b7b7;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #b7b7b7;
  border: 2px solid #ffffff;
`;

export const Line = styled.div`
  flex: 1 1 auto;
  position: absolute;
  top: 4px;
  left: calc(-50% + 10px);
  right: calc(50% + 10px);
  height: 1px;
  background: #d7d7d7;
`;
