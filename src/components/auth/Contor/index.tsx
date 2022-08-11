import Text from "components/@common/Text";
import { pallet } from "constants/pallet";
import * as Styled from "./ContorStyled";

const Contor = () => {
  return (
    <Styled.Contour>
      <Styled.Line />
      <Text color={pallet.baseColor.subText} typography="h5">
        OR
      </Text>
      <Styled.Line />
    </Styled.Contour>
  );
};

export default Contor;
