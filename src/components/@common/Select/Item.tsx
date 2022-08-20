import { useDropdownContext } from "contexts/DropdownContext";
import * as Styled from "./SelectStyled";

export interface Props {
  value: string;
}

const Item = ({ value }: Props) => {
  const { handleSelctAndClose, select } = useDropdownContext();
  return (
    <Styled.ItemWrapper
      isSelect={select === value}
      onClick={() => handleSelctAndClose(value)}
    >
      {value}
    </Styled.ItemWrapper>
  );
};

export default Item;
