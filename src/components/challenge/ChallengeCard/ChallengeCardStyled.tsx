import { pallet } from "constants/pallet";
import { mediaQuery } from "lib/styles/media";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkWrapper = styled(Link)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    137.5deg,
    rgba(255, 255, 255, 0.8) 0%,
    #ffffff 0.01%,
    rgba(255, 255, 255, 0.6) 91.15%
  );
  border: 1px solid #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  width: 20rem;
  margin: 1rem;
  ${mediaQuery(1056)} {
    width: calc(50% - 2rem);
  }
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 1rem;
    }
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: -0.005em;
  color: #333333;
`;

export const DateAndHeart = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 56px;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.005em;
  color: ${pallet.baseColor.subText};
  flex: 1;
`;

export const Category = styled.span`
  margin-top: 12px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.005em;
  color: ${pallet.baseColor.subText};
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 41px;
`;

export const Participants = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 38px;
  & > div {
    position: absolute;
  }
  & > div:nth-of-type(2) {
    left: 23px;
  }
  & > div:nth-of-type(3) {
    left: calc(23px * 2);
  }
`;

export const PlusCircle = styled.div`
  background: #f2f2f2;
  border: 1px solid #ffffff;
  border-radius: 50%;
`;
