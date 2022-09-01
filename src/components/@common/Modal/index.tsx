import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";
import * as Styled from "./ModalStyled";

export interface Props {
  visible: boolean;
}

const Modal = ({ visible, children }: PropsWithChildren<Props>) => {
  return (
    <>
      <AnimatePresence initial={false}>
        {visible && (
          <Styled.Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <Styled.Wrapper>
        <AnimatePresence>
          {visible && (
            <Styled.Block
              initial={{ y: "30vh", opacity: 0 }}
              animate={{ y: "0vh", opacity: 1 }}
              exit={{ y: "30vh", opacity: 0 }}
              transition={{ type: "spring", bounce: 0.33 }}
            >
              {children}
            </Styled.Block>
          )}
        </AnimatePresence>
      </Styled.Wrapper>
    </>
  );
};

export default Modal;
