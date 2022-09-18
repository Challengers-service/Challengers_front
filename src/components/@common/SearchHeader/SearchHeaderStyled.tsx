import Stack from "components/@common/Stack";
import styled from "styled-components";

export const Wrapper = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search_input {
    max-width: 933px;
    background-color: #fff;
  }
  gap: 40px;
`;

export const ImgGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
