import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  .feed_select[data-open="open"] {
    .feed_trigger {
      border: none;
    }
  }
`;

export const Trigger = styled.div`
  display: flex;
  justify-content: space-between;
  width: 119px;
  padding: 9px 15px;
  color: ${pallet.baseColor.subText};
  background: #f1f1f1;
  border-radius: 5px;
`;
