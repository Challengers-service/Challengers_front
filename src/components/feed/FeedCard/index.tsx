import * as Styled from "./FeedCardStyled";

export interface Props {
  src: string;
}

const FeedCard = ({ src }: Props) => {
  return <Styled.Img whileHover={{ scale: 1.5, zIndex: 1 }} src={src} />;
};

export default FeedCard;
