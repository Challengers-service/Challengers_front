import Alarm from "components/@common/Alarm";
import Avatar from "components/@common/Avatar";
import Input, { InputProps } from "components/@common/Input";
import { SearchIcon } from "components/@common/vectors";
import useAuth from "hooks/useAuth";
import * as Styled from "./SearchHeaderStyled";

export interface Props extends InputProps {
  className?: string;
}

const SearchHeader = ({
  className,
  value,
  onChange,
  onKeyUp,
  ...props
}: Props) => {
  const { me, isLogin } = useAuth();
  return (
    <Styled.Wrapper className={className}>
      <Input
        value={value}
        className="search_input"
        onKeyUp={onKeyUp}
        onChange={onChange}
        isIcon={true}
        {...props}
        icon={<SearchIcon />}
      />
      <Styled.ImgGroup>
        <Alarm />
        {isLogin && <Avatar mode="header" url={me?.image} />}
      </Styled.ImgGroup>
    </Styled.Wrapper>
  );
};

export default SearchHeader;
