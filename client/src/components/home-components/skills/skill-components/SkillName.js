import styled from "styled-components";
import {bp, colors, FontHeading2, PgSmall} from "../../../../styles/CommonStyle";

export const Name = styled.span`
  ${PgSmall};
  ${FontHeading2};
  color: ${colors.white};
  transform: translateY(-100%);
  transition: all 0.3s ease-in;
  position: absolute;
  bottom: -35%;
  opacity: 0;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${bp.tablet}px){
    transform: translateY(0);
    opacity: 1;
  }
`
