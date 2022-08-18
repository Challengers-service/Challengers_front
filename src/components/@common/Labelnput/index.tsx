import Input, { InputProps } from "components/@common/Input";
import { forwardRef } from "react";
import Label, { Props as LabelProps } from "../Label";
import { StyledLabelInput } from "./LabelnputStyled";

export interface LabelInputProps extends InputProps, LabelProps {}

const Labelnput = forwardRef<HTMLInputElement, LabelInputProps>(
  (
    { width, labelText, isRequiredIcon = false, ...rest }: LabelInputProps,
    ref
  ) => {
    return (
      <StyledLabelInput>
        <Label labelText={labelText} isRequiredIcon />
        <Input width={width} {...rest} ref={ref} />
      </StyledLabelInput>
    );
  }
);

export default Labelnput;
