import * as Styled from "./AvatarStyled";

export interface Props {
  url?: string;
}

const bgColors = ["#607EAA", "#CFE8A9", "#EAE3D2", "#E7C2C2", "#FECD70"];
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Avatar = ({ url }: Props) => {
  const isUrl = Boolean(url);
  const bgColor = isUrl
    ? bgColors[getRandomInt(0, bgColors.length)]
    : "#F2F2F2";
  return (
    <Styled.Avatar isUrl={isUrl} bgColor={bgColor}>
      {isUrl ? (
        <img src={url} alt="프로필 이미지" />
      ) : (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.73885 0.407769H3.71885V3.41977H0.706845V4.45177H3.71885V7.45177H4.73885V4.45177H7.75085V3.41977H4.73885V0.407769Z"
            fill="#666666"
          />
        </svg>
      )}
    </Styled.Avatar>
  );
};

export default Avatar;
