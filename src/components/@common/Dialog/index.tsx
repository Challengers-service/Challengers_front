import { ReactNode } from "react";
import Button from "../Button";
import Modal from "../Modal";
import { CloseIcon } from "../vectors";
import * as Styled from "./DialogStyled";

export interface Props {
  visible: boolean;
  title: ReactNode;
  content: string;
  confirmText?: string;
  subText?: string;
  onClose(): void;
  onConfirm(): void;
  mode: "default" | "image";
}

const Dialog = ({
  visible,
  title,
  content,
  confirmText,
  subText,
  onClose,
  onConfirm,
}: Props) => {
  return (
    <Modal visible={visible}>
      <Styled.Wrapper>
        <Styled.header>
          <CloseIcon onClick={onClose} />
        </Styled.header>
        <Styled.Contents>
          <div>{title}</div>
          <div>{content}</div>
        </Styled.Contents>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </Styled.Wrapper>
    </Modal>
  );
};

export default Dialog;
