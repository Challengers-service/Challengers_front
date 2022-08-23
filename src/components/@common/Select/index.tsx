import { ReactNode } from "react";
import { Dropdown, DropdownContextType } from "contexts/DropdownContext";

export interface Props {
  value?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  trigger?: ReactNode;
  options: string[];
  type?: DropdownContextType;
  isAlwaysOpen?: boolean;
}

const Select = ({
  value,
  initialValue,
  onChange,
  trigger,
  options,
  type,
  isAlwaysOpen,
}: Props) => {
  return (
    <Dropdown
      value={value}
      type={type}
      isAlwaysOpen={isAlwaysOpen}
      initialValue={initialValue}
      onChange={onChange}
    >
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
