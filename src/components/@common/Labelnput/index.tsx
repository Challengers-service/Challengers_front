import Input, { InputProps, InputType } from "components/@common/Input";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledLabelInput } from "./LabelnputStyled";

export interface LabelInputProps extends InputProps {
  labelText: string;
}

const Labelnput = forwardRef<HTMLInputElement, LabelInputProps>(
  ({ width, labelText, ...rest }: LabelInputProps, ref) => {
    return (
      <StyledLabelInput>
        <label>{labelText}</label>
        <Input width={width} {...rest} ref={ref} />
      </StyledLabelInput>
    );
  }
);

export default Labelnput;
