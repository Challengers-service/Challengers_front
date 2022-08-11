import styled from "styled-components";

export const StyledLoginPage = styled.div`
  height: 100%;
  @media (max-width: 450px) {
    padding: 0 20px;
  }
  @media (max-width: 1130px) {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1130px) {
    display: grid;
    grid-template-columns: 672px 1fr;
    align-items: center;
  }
`;

export const StyledLogin = styled.div`
  max-width: 452px;
  width: 100%;
  margin: 0 auto;
`;

export const ExtraGroup = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Gap = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${props => props.gap};
`;

export const RocketBG = styled.div`
  height: 100%;
  background-color: #f3f5fa;
  position: relative;
  max-width: 672px;
`;
