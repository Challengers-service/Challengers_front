import styled, { css } from "styled-components";

const CardStyles = css<{ isSelect: boolean }>`
  ${props =>
    props.isSelect === true &&
    css`
      background: linear-gradient(
        137.5deg,
        rgba(255, 255, 255, 0.8) 0%,
        #ffffff 0.01%,
        rgba(255, 255, 255, 0.6) 91.15%
      );
      border: 2px solid #6563ff;
    `}

  ${props =>
    props.isSelect === false &&
    css`
      background: linear-gradient(
        137.5deg,
        rgba(255, 255, 255, 0.8) 0%,
        #ffffff 0.01%,
        rgba(255, 255, 255, 0.6) 91.15%
      );
      border: 1px solid #ffffff;
    `}
`;

export const Wrapper = styled.div<{ isSelect: boolean }>`
  position: relative;
  width: 227px;
  height: 304px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 72px 39px 49px;
  justify-content: space-between;
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  ${CardStyles}
  img {
    width: 100%;
  }
`;

export const checkBox = styled.div`
  position: absolute;
  top: -12px;
  left: calc(50% - 12px);
`;

export const TextWrapper = styled.div`
  line-height: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
  span:first-child {
    color: #000000;
    font-weight: 500;
    font-size: 20px;
  }
  span:last-child {
    color: #898d9f;
    font-weight: 400;
    font-size: 15px;
  }
`;
