import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 546px;
  .description_date {
    display: block;
    margin-bottom: 20px;
  }
`;

export const SubText = styled.span<{ fontWeight: number }>`
  font-size: 15px;
  letter-spacing: -0.005em;
  color: ${pallet.baseColor.subText};
  ${props => css`
    font-weight: ${props.fontWeight};
  `}
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #333333;
  letter-spacing: -0.005em;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 50px;
`;

export const Description = styled.div`
  max-height: 164px;
  overflow: scroll;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  color: ${pallet.baseColor.subText};
`;

export const FlexEnd = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
