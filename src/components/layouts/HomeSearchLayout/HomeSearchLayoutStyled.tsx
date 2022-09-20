import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 50px;
  padding-right: 85px;
  .search_header {
    margin-bottom: 40px;
  }
  .search-layout_title {
    display: block;
    margin-bottom: 60px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  .search_select[data-open="open"] {
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
  span {
    color: ${pallet.baseColor.subText};
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
