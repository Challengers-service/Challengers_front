import React from "react";
import { StyledLabel } from "./LabelStyled";

export interface LabelProps {
  mb?: string;
  text: React.ReactNode;
}

export default function Label(props: LabelProps) {
  return <StyledLabel {...props}>{props.text}</StyledLabel>;
}
