import { ReactNode } from "react";
import { Dropdown } from "contexts/DropdownContext";

export interface Props {
  defaultValue: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  trigger: ReactNode;
  options: string[];
}

const Select = ({ defaultValue, onChange, trigger, options }: Props) => {
  return (
    <Dropdown value={defaultValue} onChange={onChange}>
      <Dropdown.Trigger>{trigger}</Dropdown.Trigger>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} value={option} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
