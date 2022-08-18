import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 92px;
  padding-right: 166px;
  @media (max-width: 840px) {
    padding-right: 30px;
  }
`;

export const CateogryGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 147px;
  justify-content: space-between;
  @media (max-width: 690px) {
    justify-content: center;
  }
`;

export const CategoryCardWrapper = styled.div``;
