import * as Styled from "./DefaultTriggerStyled";
import { ReactComponent as ArrowIcon } from "assets/vectors/ArrowIcon.svg";

export interface Props {
  className?: string;
  value: string;
}

const DefaultTrigger = ({ value, className }: Props) => {
  return (
    <Styled.Select className={className}>
      <label>
        <span>{value}</span>
        <ArrowIcon />
      </label>
    </Styled.Select>
  );
};

export default DefaultTrigger;
