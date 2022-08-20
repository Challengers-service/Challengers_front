import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 61px;
  left: 0;
  width: 196px;
  height: fit-content;
  max-height: 403px;
  background: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
  padding: 30px;
  padding-right: 0;
  z-index: 1000;
`;

export const Lists = styled.ul`
  width: 100%;
  height: fit-content;
  max-height: calc(403px - 60px);
  border-radius: 0;
  overflow: auto;
`;
