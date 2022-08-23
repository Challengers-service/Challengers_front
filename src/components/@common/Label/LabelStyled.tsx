import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.label`
  display: flex;
  color: #333333;
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;
  strong {
    display: block;
    margin-top: 3px;
    color: ${pallet.mainColor};
  }
  .subText {
    margin-left: 7px;
    color: ${pallet.baseColor.subText};
  }
`;
