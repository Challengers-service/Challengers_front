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
  onClickSubText?(): void;
}

const Dialog = ({
  visible,
  title,
  content,
  confirmText,
  subText,
  onClose,
  onConfirm,
  onClickSubText,
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
        <Button className="confirm_button" fullWidth onClick={onConfirm}>
          {confirmText || "확인"}
        </Button>
        {subText !== undefined && (
          <Styled.SubText onClick={onClickSubText}>{subText}</Styled.SubText>
        )}
      </Styled.Wrapper>
    </Modal>
  );
};

export default Dialog;
