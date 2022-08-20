import { useDropdownContext } from "contexts/DropdownContext";
import { PropsWithChildren } from "react";
import * as Styled from "./SelectStyled";

interface Props {}

const Menu = ({ children }: PropsWithChildren<Props>) => {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;

  return (
    <Styled.MenuWrapper>
      <Styled.Lists>{children}</Styled.Lists>
    </Styled.MenuWrapper>
  );
};

export default Menu;
