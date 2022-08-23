import { useDropdownContext } from "contexts/DropdownContext";
import { PropsWithChildren } from "react";
import * as Styled from "./SelectStyled";

interface Props {}

const Menu = ({ children }: PropsWithChildren<Props>) => {
  const { isOpen, type } = useDropdownContext();

  return (
    <Styled.MenuWrapper
      type={type}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <Styled.Lists type={type}>{children}</Styled.Lists>
    </Styled.MenuWrapper>
  );
};

export default Menu;
