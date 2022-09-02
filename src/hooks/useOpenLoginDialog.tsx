import { useDialogContext } from "contexts/DialogContext";
import { useCallback } from "react";
import { useInternalRouter } from "./useInternalRouter";
import wavePng from "assets/png/wave.png";

export function useOpenLoginDialog() {
  const { open } = useDialogContext();
  const router = useInternalRouter();

  const openLoginDialog = useCallback(() => {
    open({
      title: <img src={wavePng} />,
      content: "로그인이 필요한 서비스 입니다.",
      confirmText: "로그인",
      subText: "계정이 없으신가요?",
      onConfirm() {
        router.push("/login");
      },
      onClickSubText() {
        router.push("/join");
      },
    });
  }, [open]);
  return openLoginDialog;
}
