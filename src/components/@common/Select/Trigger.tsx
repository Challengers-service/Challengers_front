import { pallet } from "constants/pallet";
import { useDropdownContext } from "contexts/DropdownContext";
import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

interface Props {}

const Trigger = ({ children }: PropsWithChildren<Props>) => {
  const context = useDropdownContext();
  const { isOpen, handleOpen, handleClose } = context;
  return (
    <TriggerStyled
      className="select_trigger"
      data-open={isOpen ? "open" : "close"}
      isOpen={isOpen}
      onClick={!isOpen ? handleOpen : handleClose}
    >
      {children}
    </TriggerStyled>
  );
};

const TriggerOpenStyle = css<{ isOpen?: boolean }>`
  ${props =>
    props.isOpen === true &&
    css`
      background: #fff;
      border: 1px solid ${pallet.mainColor};
      svg {
        transform: rotate(0.5turn);
      }
    `}
`;

const TriggerStyled = styled.div<{ isOpen?: boolean }>`
  cursor: pointer;
  & > * {
    ${TriggerOpenStyle}
  }
`;

export default Trigger;
