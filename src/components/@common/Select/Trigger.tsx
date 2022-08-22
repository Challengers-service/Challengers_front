import { useDropdownContext } from "contexts/DropdownContext";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {}

const Trigger = ({ children }: PropsWithChildren<Props>) => {
  const context = useDropdownContext();
  const { isOpen, handleOpen, handleClose } = context;
  return (
    <TriggerStyled onClick={!isOpen ? handleOpen : handleClose}>
      {children}
    </TriggerStyled>
  );
};

const TriggerStyled = styled.div`
  cursor: pointer;
`;

export default Trigger;
