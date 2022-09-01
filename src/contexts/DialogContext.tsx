import { PropsWithChildren, ReactNode, useState } from "react";

interface DialogContextValue {
  title?: ReactNode;
  content?: string;
  buttonText?: string;
}

interface Props {}

export function DialogProvider({ children }: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
}
