import { pallet } from "constants/pallet";
import { Link, LinkProps } from "react-router-dom";
import Text from "../Text";

export interface AnchorProps extends LinkProps {
  text: string;
}

const Anchor = ({ text, children, ...rest }: AnchorProps) => {
  return (
    <Link {...rest}>
      {children}
      <Text color={pallet.baseColor.subText} typography="h5">
        {text}
      </Text>
    </Link>
  );
};

export default Anchor;
