import * as Styled from "./LabelStyled";

export interface Props {
  labelText: string;
  isRequiredIcon?: boolean;
  subText?: string;
}

const Label = ({ labelText, isRequiredIcon, subText }: Props) => {
  return (
    <Styled.Wrapper>
      <span>{labelText}</span>
      {isRequiredIcon && <strong>*</strong>}
      <span className="subText">{subText}</span>
    </Styled.Wrapper>
  );
};

export default Label;
