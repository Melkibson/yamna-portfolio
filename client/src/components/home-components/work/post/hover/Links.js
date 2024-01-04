import styled from "styled-components";
import {
    colors,
    FontParagraphBd, RowBetween
} from "../../../../../styles/CommonStyle";

const Row = styled(RowBetween)`
  width: 100%;
`

const Link = styled.span.attrs(
    props => ({
        color: props.color
    })
)`
  font-size: 18px;
  color: ${props => props.color};
  ${FontParagraphBd};
  transition: all 0.2s ease-out;
  &:hover {
    color: ${colors.white};
  }
  
`


const Links = ({props}) => {
    const items = []
        props.name.forEach((name, index) => {
            items.push(
                <Link color={props.color} key={index}>
                    <a href={props.link[index]} target={'_blank'} rel='noreferrer'>{name}</a>
                </Link>
            )
        })
    return(
        <Row>
            {items}
        </Row>
    )
}
export default Links
