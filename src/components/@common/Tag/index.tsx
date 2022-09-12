import * as Styled from "./TagStyled";

export interface Props {
  name: string;
}

const Tag = ({ name }: Props) => {
  return (
    <Styled.Tag>
      <span>#</span>
      <span>{name}</span>
    </Styled.Tag>
  );
};

export default Tag;
