import { ArrowIcon } from "../vectors";
import * as Styled from "./DefaultTriggerStyled";

export interface Props {
  className?: string;
  value: string;
}

const DefaultTrigger = ({ value, className }: Props) => {
  return (
    <Styled.Select className={className}>
      <label>
        <span>{value}</span>
        <ArrowIcon fill="#666666" />
      </label>
    </Styled.Select>
  );
};

export default DefaultTrigger;
