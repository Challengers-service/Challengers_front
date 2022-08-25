import SideBar from "components/@common/SideBar";
import { PropsWithChildren } from "react";
import * as Styled from "./SidebarLayoutStyled";

export interface Props {}

const SidebarLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Styled.Wrapper>
      <SideBar />
      {children}
    </Styled.Wrapper>
  );
};

export default SidebarLayout;
