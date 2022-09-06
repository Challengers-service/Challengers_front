import Alarm from "components/@common/Alarm";
import Input, { InputProps } from "components/@common/Input";
import { SearchIcon } from "components/@common/vectors";
import * as Styled from "./SearchHeaderStyled";

export interface Props
  extends Pick<InputProps, "value" | "onChange" | "onKeyUp"> {
  className?: string;
}

const SearchHeader = ({ className, value, onChange, onKeyUp }: Props) => {
  return (
    <Styled.Wrapper className={className}>
      <Input
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        className="search_input"
        placeholder="Search Challenge"
        isIcon={true}
        icon={<SearchIcon />}
      />
      <Alarm />
    </Styled.Wrapper>
  );
};

export default SearchHeader;
