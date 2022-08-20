import { useDropdownContext } from "contexts/DropdownContext";
import { PropsWithChildren } from "react";

interface Props {}

const Trigger = ({ children }: PropsWithChildren<Props>) => {
  const context = useDropdownContext();
  const { isOpen, handleOpen, handleClose } = context;
  return <div onClick={!isOpen ? handleOpen : handleClose}>{children}</div>;
};

export default Trigger;
