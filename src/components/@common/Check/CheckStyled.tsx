import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  background: ${pallet.mainColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
