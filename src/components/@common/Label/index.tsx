import { ReactNode } from "react";
import * as Styled from "./LabelStyled";

export interface Props {
  labelText: string;
  isRequiredIcon?: boolean;
  subText?: ReactNode;
}

const Label = ({ labelText, isRequiredIcon, subText }: Props) => {
  return (
    <Styled.Wrapper>
      <span>{labelText}</span>
      {isRequiredIcon && <strong className="isRequiredIcon">*</strong>}
      {subText}
    </Styled.Wrapper>
  );
};

export default Label;
