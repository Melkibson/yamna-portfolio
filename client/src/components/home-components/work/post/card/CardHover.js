import styled from "styled-components";
import {hoverAttrs} from "../../../../../utils/Attributes";
import Card from "../hover/Card";

export const Hover = styled.div.attrs(hoverAttrs)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: ${props => props.txtColor};
  opacity: 0;
  background: ${props => props.lightBgColor};;
  transition: all ease-in 0.3s;
  padding: 35px 25px;
  overflow: hidden;
  z-index: 2;
  &:after{
    position: absolute;
    content: '';
    width: 200%;
    height: 200%;
    background: ${ props => props.bgColor};
    top:-50%;
    left:-50%;
    z-index: -1;
    border-radius: 40%;
  }
  
  @keyframes spin {
      0% {
        transform: translateY(-75%) rotate(0);
      }
      100% {
        transform: translateY(0%) rotate(180deg);
      }
  }

`

const CardHover = (props) => {
    return(
        <Hover
            lightBgColor={props.colorLight}
            bgColor={props.colorDark}
            colorText={props.colorLight}
        >
            <Card
                color={props.colorLight}
                tech={props.tech}
                links={props.links}
            />
        </Hover>
    )
}

export default CardHover
