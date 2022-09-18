import styled from "styled-components";

export const Wrapper = styled.div`
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

export const Block = styled.div`
  max-width: 452px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

export const ImgWrapper = styled.div<{ bgColor: string }>`
  height: 100%;
  background-color: #f3f5fa;
  position: relative;
  max-width: 672px;
  background-color: ${props => props.bgColor};
`;
