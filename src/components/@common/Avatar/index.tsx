import * as Styled from "./AvatarStyled";

export interface Props {
  url: string;
}

const Avatar = ({ url }: Props) => {
  return (
    <Styled.Avatar>
      <img src={url} alt="프로필 이미지" />
    </Styled.Avatar>
  );
};

export default Avatar;
