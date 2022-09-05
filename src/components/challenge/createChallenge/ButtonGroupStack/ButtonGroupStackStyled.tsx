import { pallet } from "constants/pallet";
import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  .save_button {
    background: ${pallet.secondary.red};
  }
  .prev_button {
    background: ${pallet.baseColor.gray};
  }
  & > button {
    width: 130px;
  }
`;
