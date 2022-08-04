import { pallet } from "constants/pallet";
import { Link, LinkProps } from "react-router-dom";
import Text from "../Text";

export interface AnchorProps extends LinkProps {
  text: string;
}

const Anchor = ({ text, ...rest }: AnchorProps) => {
  return (
    <Link {...rest}>
      <Text color={pallet.gray0} typography="h5">
        {text}
      </Text>
    </Link>
  );
};

export default Anchor;
