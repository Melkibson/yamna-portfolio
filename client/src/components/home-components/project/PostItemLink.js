import styled from "styled-components";
import {bp, FontParagraphBd, FontParagraphMd, PgSmall} from "../../../styles/CommonStyle";

export const PostItemLink = styled.span`
  ${FontParagraphBd};
  text-transform: capitalize;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 50px;
  top :0;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease-in;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.75);
  z-index: 2;
  cursor: pointer;
  @media screen and (max-width: ${bp.tablet}px){
    padding: 30px;
  }  
  
`
export const PostItemLinkText = styled.span`
  ${FontParagraphMd};
  text-transform: none;
  ${PgSmall};
`
