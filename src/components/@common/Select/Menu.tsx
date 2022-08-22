import { useDropdownContext } from "contexts/DropdownContext";
import { PropsWithChildren } from "react";
import * as Styled from "./SelectStyled";

interface Props {}

const Menu = ({ children }: PropsWithChildren<Props>) => {
  const { isOpen } = useDropdownContext();

  return (
    <Styled.MenuWrapper style={{ display: isOpen ? "block" : "none" }}>
      <Styled.Lists>{children}</Styled.Lists>
    </Styled.MenuWrapper>
  );
};

export default Menu;
