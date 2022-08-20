import * as Styled from "./SelectStyled";
import { ReactComponent as ArrowIcon } from "assets/vectors/ArrowIcon.svg";
import MenuItemGroup from "../MenuItemGroup";
import { PropsWithChildren, ReactNode } from "react";
import { Dropdown } from "contexts/DropdownContext";

export interface Props {
  defaultValue: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  Trigger: ReactNode;
  options: string[];
}

const Select = ({ defaultValue, onChange, Trigger, options }: Props) => {
  return (
    <Dropdown value={defaultValue} onChange={onChange}>
      <Dropdown.Trigger>{Trigger}</Dropdown.Trigger>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} value={option} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
