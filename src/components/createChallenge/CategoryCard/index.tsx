import Check from "components/@common/Check";
import React from "react";
import * as Styled from "./CategoryCardStyled";

export interface Props {
  imgUrl: string;
  koreaTitle: string;
  englishTitle: string;
  isSelect?: boolean;
}

const CategoryCard = React.memo(
  ({ imgUrl, koreaTitle, englishTitle, isSelect = false }: Props) => {
    return (
      <Styled.Wrapper isSelect={isSelect}>
        {isSelect && (
          <Styled.checkBox>
            <Check />
          </Styled.checkBox>
        )}
        <img src={imgUrl} alt={englishTitle} />
        <Styled.TextWrapper>
          <span>{koreaTitle}</span>
          <span>{englishTitle}</span>
        </Styled.TextWrapper>
      </Styled.Wrapper>
    );
  }
);

export default CategoryCard;
