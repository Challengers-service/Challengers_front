import Dialog from "components/@common/Dialog";
import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface DialogContextValue {
  open(config: DialogConfig): void;
}

interface DialogConfig {
  title: ReactNode;
  content: string;
  confirmText?: string;
  subText?: string;
  onClose?(): void;
  onConfirm?(): void;
  onClickSubText?(): void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

interface Props {}

export function DialogProvider({ children }: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<DialogConfig | null>(null);

  const open = useCallback((config: DialogConfig) => {
    setIsOpen(true);
    setConfig(config);
  }, []);

  const close = useCallback(() => {
    config?.onClose?.();
    setIsOpen(false);
  }, [config]);

  const confirm = useCallback(() => {
    config?.onConfirm?.();
    setIsOpen(false);
  }, [config]);

  const clickSubText = useCallback(() => {
    config?.onClickSubText?.();
    setIsOpen(false);
  }, [config]);

  const value = { open };
  return (
    <DialogContext.Provider value={value}>
      {children}
      <Dialog
        visible={isOpen}
        title={config?.title}
        content={config?.content || ""}
        confirmText={config?.confirmText}
        subText={config?.subText}
        onClose={close}
        onConfirm={confirm}
        onClickSubText={clickSubText}
      />
    </DialogContext.Provider>
  );
}

export function useDialogContext() {
  const context = useContext(DialogContext);
  if (context === null) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
}
