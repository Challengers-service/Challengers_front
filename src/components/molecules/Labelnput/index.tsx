import Input, { InputType } from "@atoms/Input";
import Label from "@atoms/Label";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledLabelInput } from "./LabelnputStyled";

export interface LabelInputProps {
  register: UseFormRegisterReturn;
  InputType?: InputType;
  width?: string;
  labelText: string;
  placeholder: string;
}

export default function Labelnput({
  register,
  InputType,
  width,
  labelText,
  placeholder,
}: LabelInputProps) {
  return (
    <StyledLabelInput>
      <Label text={labelText} mb="15px" />
      <Input
        width={width}
        register={register}
        type={InputType}
        placeholder={placeholder}
      />
    </StyledLabelInput>
  );
}
