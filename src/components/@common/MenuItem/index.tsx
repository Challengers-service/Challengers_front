import * as Styled from "./MenuItemStyled";

export interface Props {
  value: string | number;
  isSelect?: boolean;
}

const MenuItem = ({ value, isSelect = false }: Props) => {
  return <Styled.Wrapper isSelect={isSelect}>{value}</Styled.Wrapper>;
};

export default MenuItem;
