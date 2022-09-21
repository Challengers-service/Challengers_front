import { forwardRef } from "react";
import { Message, StyledInput, Wrapper } from "./InputStyled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  errorMessage?: string;
  dataPlaceHolder?: string;
  isBorder?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isIcon?: boolean;
  isError?: boolean;
  isFocusActiveStyle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = "100%",
      errorMessage,
      isBorder = false,
      dataPlaceHolder,
      className,
      icon,
      isIcon,
      isError = false,
      isFocusActiveStyle = false,
      ...rest
    }: InputProps,
    ref
  ) => {
    return (
      <>
        <Wrapper style={rest.style} width={width} isError={isError}>
          <StyledInput
            isIcon={isIcon}
            className={className}
            data-placeholder={dataPlaceHolder}
            width={width}
            ref={ref}
            isBorder={isBorder}
            isError={isError}
            isFocusActiveStyle={isFocusActiveStyle}
            {...rest}
          />
          {icon && <div className="input_icon">{icon}</div>}
          {errorMessage ? <Message>{errorMessage}</Message> : null}
        </Wrapper>
      </>
    );
  }
);

export default Input;
