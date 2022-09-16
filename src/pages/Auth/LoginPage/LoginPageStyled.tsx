import styled from "styled-components";

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
