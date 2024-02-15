import styled from "styled-components";
import {motion} from "framer-motion";
import {bp, colors} from "../../../styles/CommonStyle";

export const Line = styled(motion.span)`
  height: 15px;
  width: 80px;
  background: ${colors.white};
  margin-right: 30px;
  transition: all 0.2s ease-in;
  @media screen and (max-width: ${bp.tablet}px){
   width: 60px;
  }
   @media screen and (max-width: ${bp.mobile}px){
   width: 30px;
   height: 10px;
}

`
