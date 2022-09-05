import { useDropdownContext } from "contexts/DropdownContext";
import * as Styled from "./SelectStyled";

export interface Props {
  value: string;
}

const Item = ({ value }: Props) => {
  const { handleSelect, select, type } = useDropdownContext();
  return (
    <>
      {(type === "default" || type === "home") && (
        <Styled.ItemWrapper
          isSelect={select === value}
          onClick={() => handleSelect(value)}
        >
          {value}
        </Styled.ItemWrapper>
      )}
      {type === "button" && (
        <Styled.ItemButton
          isSelect={select === value}
          onClick={() => handleSelect(value)}
        >
          {value}
        </Styled.ItemButton>
      )}
    </>
  );
};

export default Item;
