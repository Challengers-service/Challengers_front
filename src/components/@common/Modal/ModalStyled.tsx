import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Block = styled(motion.div)`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: -webkit-fill-available;
  background: rgba(0, 0, 0, 0.6);
`;
