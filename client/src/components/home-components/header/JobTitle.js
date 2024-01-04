import styled from "styled-components";
import {bp, colors, FontHeading2, FontParagraphMd, responsiveTextSize, textSize} from "../../../styles/CommonStyle";
import {Line} from "./Line";
import {initial, animate} from "../../../styles/Animation";

const Title = styled.span`
  ${responsiveTextSize(textSize.min.h1Sub, textSize.max.h1Sub, bp.mobile, bp.desktopBig)};
  ${FontHeading2};
  color: ${colors.white};
  align-self: flex-end;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  z-index: 1;  
     span{
        &:last-child{
           margin-left: 30px;
           background-image: linear-gradient(45deg, #FA8BFF, #2BD2FF , #2BFF88);
            background-size: 300% 300%;
            transform: translateZ();
            animation: gradient 8s ease alternate infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
    
        }

     }
`

const JobTitle = ({position, type}) => {
    return(
        <Title>
            <Line
                initial={initial.slide}
                animate={animate.slide}
            />
            <span>{position}</span>
            <span>{type}</span>
        </Title>
    )
}

export default JobTitle
