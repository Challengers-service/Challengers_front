import { PropsWithChildren } from "react";
import * as Styled from "./MenuItemGroupStyled";

export interface Props {}

const MenuItemGroup = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Styled.Wrapper>
      <Styled.Lists>{children}</Styled.Lists>
    </Styled.Wrapper>
  );
};

export default MenuItemGroup;
