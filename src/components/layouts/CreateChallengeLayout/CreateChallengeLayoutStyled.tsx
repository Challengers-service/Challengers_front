import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbfbfb;
  position: relative;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 130px 30px 1fr;
  grid-template-rows: 230px 1fr;
  grid-template-areas:
    "SideBarWrapper ChallengeStepWrapper ChallengeStepWrapper"
    "SideBarWrapper . stepWrapper";
`;

export const ChallengeStepWrapper = styled.div`
  padding-top: 85px;
  max-width: 800px;
  margin: 0 auto;
  min-width: 100%;
  grid-area: ChallengeStepWrapper;
`;

export const StepWrapper = styled.div`
  grid-area: stepWrapper;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span<{ fontSize: string }>`
  font-weight: 400;
  font-size: ${props => props.fontSize};
  color: ${pallet.baseColor.subText};
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #333333;
  margin-bottom: 20px;
`;

export const SideBarWrapper = styled.div`
  position: relative;
  left: 20px;
  top: 20px;
  grid-area: SideBarWrapper;
`;
