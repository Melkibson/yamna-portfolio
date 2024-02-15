import styled from "styled-components";
import {Column, FontParagraphBd, FontParagraphLight} from "../../../../../styles/CommonStyle";
import {colorAttrs} from "../../../../../utils/Attributes";

export const Container = styled(Column).attrs(colorAttrs)`
    align-items: flex-start;
    margin-bottom: 30px;
    color: ${props => props.color};
    width: 100%;
    gap: 10px;
    &:last-child{
      position: absolute;
      margin: 0;
      bottom: 25px;
      left: 0;
      padding: 0 25px;
    }
`
export const Title = styled.span.attrs(colorAttrs)`
  position: relative;
  ${FontParagraphBd};
  font-size: 32px;
  color: ${props => props.color};
  margin-right: 10px;
  text-transform: capitalize;
`

const SubTitle = styled(Title).attrs(colorAttrs)`
  ${FontParagraphLight};
  color: ${props => props.color};
    font-size: 28px;
    margin-top: 10px;

`
const positions = ['Web', 'Full Stack', 'Front-End']

const Description = (props) => {
    return(
        <>
            <Container color={props.color}>
                <Title color={props.color}>{positions.includes(props.position) ? "Développeuse" : ''} <br/>{props.position}</Title>
                <SubTitle color={props.color}>{props.type}</SubTitle>
            </Container>
            <Container color={props.color}>
                <Title color={props.color}>{props.startMonth} • {props.endMonth}</Title>
                <Title color={props.color}>{props.startYear} {props.endYear ? "•" : ""} {props.endYear}</Title>
            </Container>
        </>
    )
}

export default Description
