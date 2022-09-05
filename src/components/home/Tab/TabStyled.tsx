import { pallet } from "constants/pallet";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebed;
`;

export const NavLinks = styled.div`
  position: relative;
  width: 390px;
  height: 44px;
  display: flex;
  a {
    text-align: center;
    width: calc(100% / 3);
    color: ${pallet.baseColor.subText};
    font-size: 18px;
    font-weight: 400;
    /* border-bottom: 1px solid #ebebed; */
  }
  a.activated {
    color: #333333;
    font-weight: 700;
    border-bottom: none;
  }
`;

export const Line = styled(motion.div)<{ pathName: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: calc(100% / 3);
  background-color: #333333;
  transition: all 0.2s ease-in-out;
  ${props =>
    props.pathName === "/new" &&
    css`
      left: calc(100% / 3);
    `}
  ${props =>
    props.pathName === "/category" &&
    css`
      left: calc((100% / 3) * 2);
    `};
`;
