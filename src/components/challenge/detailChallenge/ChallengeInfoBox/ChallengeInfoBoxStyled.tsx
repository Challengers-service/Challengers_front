import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 50px;
  width: 352px;
  background: linear-gradient(90.27deg, #ffffff 0%, #ffffff 100%);
  box-shadow: 0px 0px 20px rgba(29, 54, 152, 0.04);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  .heart {
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 35px;
`;

export const SubText = styled.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: ${pallet.baseColor.subText};
`;

export const Info = styled.div`
  color: ${pallet.baseColor.subText};
  font-size: 16px;
  font-weight: 500;
  strong {
    color: #333333;
  }
`;
