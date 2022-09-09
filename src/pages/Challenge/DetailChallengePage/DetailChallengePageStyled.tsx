import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 50px;
  padding-right: 85px;
  padding-bottom: 69px;
  header {
    margin-bottom: 52px;
  }
  .join_button {
    width: 200px;
    height: 55px;
    border-radius: 90px;
    align-self: center;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Line = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  height: 1px;
  width: 100%;
  background-color: #ebebed;
`;

export const Rule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 68px;
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 18.72px;
    color: ${pallet.baseColor.subText};
  }
`;

export const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 100px;
`;

export const ImageGroup = styled.div`
  display: flex;
  gap: 22px;
  overflow: scroll;
`;

export const Image = styled.img`
  height: 258px;
`;
