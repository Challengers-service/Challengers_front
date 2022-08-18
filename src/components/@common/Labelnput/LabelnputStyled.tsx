import { pallet } from "constants/pallet";
import styled from "styled-components";

export const StyledLabelInput = styled.div`
  label {
    display: flex;
    color: #333333;
    font-weight: 600;
    font-size: 18px;
    span {
      display: block;
      margin-top: 3px;
      color: ${pallet.mainColor};
    }
  }
`;
