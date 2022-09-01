import styled from "styled-components";
import Modal from "../Modal";

export const Wrapper = styled.div`
  width: 333px;
  max-width: calc(100vw - 32px);
  padding: 20px;
`;

export const header = styled.div`
  text-align: end;
  svg {
    cursor: pointer;
  }
`;

export const Contents = styled.div`
  margin-bottom: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
