import { HeartFillIcon, HeartNotFillIcon } from "../vectors";

export interface Props extends React.SVGProps<SVGSVGElement> {
  isFill?: boolean;
}

const Heart = ({ isFill = false, ...props }: Props) => {
  return isFill ? (
    <HeartFillIcon {...props} />
  ) : (
    <HeartNotFillIcon {...props} />
  );
};

export default Heart;
