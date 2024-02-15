import styled from "styled-components";
import {bp} from "../../../../styles/CommonStyle";

export const Svg = styled.svg`
  width: 100%;
  height: auto;
  transition: all 0.3s ease-in;
  @media screen and (max-width: ${bp.desktop}px){
    max-height: 100px;
    max-width: 100px;
  }
  @media screen and (max-width: ${bp.mobile}px){
    max-width: 60px;
  }
`

