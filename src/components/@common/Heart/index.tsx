import { HeartFillIcon, HeartNotFillIcon } from "../vectors";

export interface Props {
  isFill?: boolean;
}

const Heart = ({ isFill = false }: Props) => {
  return isFill ? <HeartFillIcon /> : <HeartNotFillIcon />;
};

export default Heart;
