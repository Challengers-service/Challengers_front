import { pallet } from "constants/pallet";
import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;

  .select_trigger[data-open="open"] {
    .trigger {
      border: none;
    }
    .trigger > span {
      color: #333333;
    }
  }
`;

export const Search = styled.span`
  flex: 1;
  strong {
    color: ${pallet.mainColor};
  }
`;

export const Trigger = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 17px;
    font-weight: 400;
    color: ${pallet.baseColor.subText};
  }
  svg {
    margin-left: 10px;
  }
`;
