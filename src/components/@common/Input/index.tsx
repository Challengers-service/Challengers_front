import { forwardRef } from "react";
import { Message, StyledInput, Wrapper } from "./InputStyled";
import { ReactComponent as ArrowIcon } from "assets/vectors/ArrowIcon.svg";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  errorMessage?: string;
  dataPlaceHolder?: string;
  isBorder?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = "100%",
      errorMessage,
      isBorder = false,
      dataPlaceHolder,
      ...rest
    }: InputProps,
    ref
  ) => {
    return (
      <Wrapper style={rest.style} width={width}>
        <StyledInput
          data-placeholder={dataPlaceHolder}
          width={width}
          ref={ref}
          isBorder={isBorder}
          {...rest}
        />
        {errorMessage ? <Message>{errorMessage}</Message> : null}
        {rest.type === "date" && <ArrowIcon fill="#666666" />}
      </Wrapper>
    );
  }
);

export default Input;
