import styled from "styled-components";
import {bp, colors, Link} from "../../../../styles/CommonStyle";

const Container = styled.div`
    height: 150px;
    width: 45%;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    transition: all ease-in-out 0.3s;
    cursor: pointer;
    &:hover {
          color: ${colors.darkGrey};
          background: ${props => props.color};;

    }
    @media screen and (max-width: ${bp.tablet}px){
      width: 30%;
    }
      
   @media screen and (max-width: ${bp.tabletMini}px){
      margin-bottom: 40px ;
      height: 90px;
      width: 100%;
   }
    
`

const Card = ({link, name, color}) => {
    return(
        <Container color={color}>
            <Link href={link}>{name}</Link>
        </Container>
    )
}

export default Card
