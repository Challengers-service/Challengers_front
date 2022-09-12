import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Tag = styled.div`
  display: flex;
  width: fit-content;
  padding: 7px 12px;
  background: #f3f5fa;
  border-radius: 90px;
  color: ${pallet.mainColor};
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.005em;
  word-break: keep-all;
`;
