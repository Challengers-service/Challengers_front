import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: grid;
  grid-template-columns: 672px 1fr;
  align-items: center;
`;

export const StyledLogin = styled.div`
  width: 452px;
  margin: 0 auto;
`;

export const ExtraGroup = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contour = styled.div`
  margin: 50px 0;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Line = styled.div`
  width: 198px;
  height: 1px;
  left: 801px;
  top: 673px;
  border: 1px solid #eeeeee;
`;

export const Gap = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${props => props.gap};
`;

export const RocketBG = styled.div`
  height: 100vh;
  background-color: #f3f5fa;
  position: relative;
  max-width: 672px;
`;
