import Alarm from "components/@common/Alarm";
import { ArrowIcon } from "components/@common/vectors";
import { RoutePath, useInternalRouter } from "hooks/useInternalRouter";
import * as Styled from "./DetailHeaderStyled";

export interface Props {
  goto?: RoutePath;
}

const DetailHeader = ({ goto }: Props) => {
  const router = useInternalRouter();
  const onClick = () => {
    goto !== undefined ? router.push(goto) : router.goBack();
  };
  return (
    <Styled.Wrapper>
      <Styled.ArrowIconBlock onClick={onClick}>
        <ArrowIcon className="header_arrowIcon" />
      </Styled.ArrowIconBlock>
      <Alarm />
    </Styled.Wrapper>
  );
};

export default DetailHeader;
