import { forwardRef, PropsWithChildren, TextareaHTMLAttributes } from "react";
import * as Styled from "./TextareaStyled";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder_color?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, PropsWithChildren<Props>>(
  (props, ref) => {
    return (
      <Styled.TextareaStyled ref={ref} {...props}>
        {props.children}
      </Styled.TextareaStyled>
    );
  }
);

export default TextArea;
