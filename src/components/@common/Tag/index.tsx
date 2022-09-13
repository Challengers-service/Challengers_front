import * as Styled from "./TagStyled";

export interface Props {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Tag = ({ name, ...props }: Props) => {
  return (
    <Styled.Tag {...props}>
      <span>#</span>
      <span>{name}</span>
    </Styled.Tag>
  );
};

export default Tag;
