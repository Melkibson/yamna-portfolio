import styled from "styled-components";
import {bp, colors} from "../../../styles/CommonStyle";
import {Title} from "../../../styles/CommonStyle";
export const NavLink = styled.span`
  cursor: pointer;
  ${Title};
  font-size: 1.75rem;
  transition: all 0.2s ease-in-out;
    @media screen and (max-width: ${bp.mobile}px){
      font-size: 1.5rem;
  }

  &:active,  &:hover{
       background-image: linear-gradient(45deg, #FA8BFF, #2BD2FF , #2BFF88);
       -webkit-background-clip: text;
        background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 150%;
          }
   @media (pointer: fine){

      &:hover, &:active{
       color: ${colors.main};
      }
      
  }
   
`
