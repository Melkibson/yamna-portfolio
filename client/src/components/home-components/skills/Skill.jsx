import styled from "styled-components";
import { bp } from "../../../styles/CommonStyle";
import { Name } from "./skill-components/SkillName";

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 130px;
  height: auto;
  align-items: center;
  justify-content: center;
   margin-right: 65px;
  @media screen and (max-width: ${bp.tablet}px) {
    height: auto;
    margin: 30px 0;
    padding: 0 30px;
    justify-content: space-between;
  
   }
     @media screen and (max-width: ${bp.mobile}px){
        width: 80px;
        height: auto;
        padding: 0;
   }
   &:hover {
    ${Name}{
        transform:  scale(1.2) translateY(0%);
        opacity: 1;
    }

   }
`
const Img = styled.img`
    width:100%;
    height: auto;
   `

const Skill = (props) => {
    return(
        <ImgContainer>
            <Img src={props.src}/>
            <Name>{props.name}</Name>
        </ImgContainer>
    )
}
export default Skill
