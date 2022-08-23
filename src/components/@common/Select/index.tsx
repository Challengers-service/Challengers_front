import { ReactNode } from "react";
import { Dropdown } from "contexts/DropdownContext";

export interface Props {
  value?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  trigger: ReactNode;
  options: string[];
}

const Select = ({ value, initialValue, onChange, trigger, options }: Props) => {
  return (
    <Dropdown value={value} initialValue={initialValue} onChange={onChange}>
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
