import * as Styled from "./TagStyled";

export interface Props {
  name: string;
}

const Tag = ({ name }: Props) => {
  return <Styled.Tag>#{name}</Styled.Tag>;
};

export default Tag;
