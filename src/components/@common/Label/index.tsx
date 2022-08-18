import * as Styled from "./LabelStyled";

export interface Props {
  labelText: string;
  isRequiredIcon?: boolean;
}

const Label = ({ labelText, isRequiredIcon }: Props) => {
  return (
    <Styled.Wrapper>
      {labelText}
      {isRequiredIcon && <span>*</span>}
    </Styled.Wrapper>
  );
};

export default Label;
