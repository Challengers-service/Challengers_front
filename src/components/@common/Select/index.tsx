import * as Styled from "./SelectStyled";
import { ReactComponent as ArrowIcon } from "assets/vectors/ArrowIcon.svg";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
}

const Select = ({ defaultValue, ...rest }: Props) => {
  return (
    <Styled.Select {...rest}>
      <label>
        <span>{defaultValue}</span>
        <ArrowIcon />
      </label>
    </Styled.Select>
  );
};

export default Select;
