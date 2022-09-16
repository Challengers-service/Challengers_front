import Input, { InputProps } from "components/@common/Input";
import { forwardRef } from "react";
import Label, { Props as LabelProps } from "components/@common/Label";
import { StyledLabelInput } from "./LabelnputStyled";

export interface LabelInputProps extends InputProps, LabelProps {}

const Labelnput = forwardRef<HTMLInputElement, LabelInputProps>(
  (
    {
      width,
      labelText,
      isRequiredIcon = false,
      style,
      ...rest
    }: LabelInputProps,
    ref
  ) => {
    return (
      <StyledLabelInput style={style}>
        <Label labelText={labelText} isRequiredIcon={isRequiredIcon} />
        <Input width={width} {...rest} ref={ref} />
      </StyledLabelInput>
    );
  }
);

export default Labelnput;
