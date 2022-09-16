import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import * as Styled from "./AuthFormLayoutStyled";

export interface Props {
  leftImage: ReactNode;
  bgColor: string;
}

const AuthFormLayout = ({
  leftImage,
  children,
  bgColor,
}: PropsWithChildren<Props>) => {
  const [windowInnerWith, setWindowInnerWidth] = useState(window.innerWidth);
  const ENDPOINT = 1130;
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowInnerWidth(window.innerWidth);
    });
  }, [windowInnerWith]);
  return (
    <Styled.Wrapper>
      <Styled.ImgWrapper bgColor={bgColor}>
        {windowInnerWith >= ENDPOINT && leftImage}
      </Styled.ImgWrapper>
      <Styled.Block>{children}</Styled.Block>
    </Styled.Wrapper>
  );
};

export default AuthFormLayout;
