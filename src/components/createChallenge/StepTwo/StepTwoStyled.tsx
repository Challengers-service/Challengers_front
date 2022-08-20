import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Stack = styled.div<{ mb?: string }>`
  width: 100%;
  display: flex;
  margin-bottom: ${props => props.mb};
`;

export const LabelSelect = styled.div`
  width: 100%;
`;

export const LabelMessageGroup = styled.div`
  margin-bottom: 13px;
  display: flex;
  gap: 13px;
`;

export const RequiredMessage = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: ${pallet.baseColor.subText};
  white-space: nowrap;
  strong {
    font-weight: 700;
    color: #6563ff;
  }
`;

export const TextInputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const TextInput = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Select = styled.div`
  position: relative;
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 90px;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 30px;
  label {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 15px;
    color: ${pallet.baseColor.subText};
  }
`;
