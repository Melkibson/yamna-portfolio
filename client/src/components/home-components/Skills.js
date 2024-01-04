import styled from "styled-components";
import {
    bp,
    colors,
    Grid,
    H2,
    Section

} from "../../styles/CommonStyle";
import Skill from './skills/Skill'
import { useEffect, useState } from "react";
import axios from "axios";

const SectionSkills = styled(Section)`
  width: 100%;
  flex-direction: column;
  overflow: hidden;
   @media screen and (max-width: ${bp.tablet}px){
      padding: 30px 0;
   }
    @media screen and (max-width: ${bp.mobile}px){
      padding: 0;
   }
`
const Heading = styled(Grid)`
  height: 110px;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  text-transform: lowercase;
  ${H2}{
      color: ${colors.white};
  }
`
const Row = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  animation: 12s linear  infinite slide;
  transform: translateZ(0.1px);
   @keyframes slide{
    0% {
      transform: translateX(0%) ;
    }
    100% {
      transform: translateX(-100%) ;  }
   }
   @media screen and (max-width: ${bp.tablet}px){
      animation: none;
      flex-wrap: wrap;
      justify-content: space-between;
       &:not(:first-child){
          display: none;
       }
   }
      @media screen and (max-width: ${bp.mobile}px){
      padding: 0;
      max-width: 290px;
}
   
`
const MainRow = styled(Grid)`
  display: flex;
  height: 250px;
  position: relative;
  @media screen and (min-width: ${bp.desktop}px){
    width: auto;
  }
   @media screen and (max-width: ${bp.tablet}px) {
      height: auto;
      padding: 20px 0;
      justify-content: center;
   }
   @media screen and (max-width: ${bp.mobile}px){
      padding: 0 0 80px 0;
   }
  ${Row}{
    row-gap: 20px;
  }
  &:hover{
    ${Row}{
     animation-play-state: paused ;
    }
  }
   
`
const Skills = ({title}) => {
  const [skill , setSkills] = useState([])

  const fetchSkills = async () => {
    try {
      const response = await axios.get('https://yamna.click/api/skill');
      setSkills(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  if (!skill.length) return null;

      const skillData = skill.map((skill, index) => (

            <Skill
                key={index}
                name={skill.name}
                src={skill.src}
            />
    ))
    return(
        <SectionSkills id={'skills'}>
                <Heading>
                    <H2>{title}</H2>
                </Heading>
            <MainRow>
                {Array.from({length: 3}, (_, index) => (
                    <Row key={index}>
                        {skillData}
                    </Row>
                ))}
            </MainRow>
        </SectionSkills>
    )
}
export default Skills
