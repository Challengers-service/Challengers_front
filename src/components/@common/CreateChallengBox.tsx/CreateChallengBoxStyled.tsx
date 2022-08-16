import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: #f3f5fa;
  border-radius: 13px;
  width: 263px;
  height: 346px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const Rocket = styled.div`
  position: absolute;
  width: 100%;
  height: 204.46px;
  left: -20px;
  top: -60px;
  img {
    width: 100%;
  }
  svg {
    width: 100%;
    position: absolute;
    left: 35px;
    bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-content: center;
  text-align: center;
`;
