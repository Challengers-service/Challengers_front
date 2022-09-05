import { mediaQuery } from "lib/styles/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
  ${mediaQuery(767)} {
    margin: 0;
  }
`;
