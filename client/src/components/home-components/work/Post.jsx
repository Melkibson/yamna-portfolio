import styled from 'styled-components'
import {
    bp,
    Column,
} from "../../../styles/CommonStyle";
import CardHover, {Hover} from "./post/card/CardHover";
import Card from "./post/card/Card";

const PostItem = styled(Column).attrs(props => ({
    border: `2px solid ${props.border}`
}))`
  position: relative;
  align-items: flex-start;
  max-height: 575px;
  width: 350px;
  border: ${props => props.border};
  padding: 25px;
  cursor: pointer;
  &:hover{
    ${Hover}{
      opacity: 1;
      &:after{
        animation: 1.25s ease-in-out  running alternate spin;
      }
    }
  }
  @media screen and (max-width: ${bp.tabletMini}px){
    margin: 0;
    width: 320px;
    height: 100%;
  }
`

const Post = (props) => {
    return(
        <PostItem border={props.colorDark}>
            <Card
                color={props.colorDark}
                company={props.company}
                type={props.type}
                city={props.city}
                country={props.country}
                position={props.position}
                startYear={props.startYear}
                endYear={props.endYear}
                startMonth={props.startMonth}
                endMonth={props.endMonth}
            />
            <CardHover
                colorLight={props.colorLight}
                colorDark={props.colorDark}
                tech={props.tech}
                links={props.links}
            />
        </PostItem>
    )
}
export default Post
