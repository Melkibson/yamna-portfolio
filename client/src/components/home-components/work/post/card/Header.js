import styled from "styled-components";
import {Heading} from "./Heading";
import {RowLocation} from "./RowLocation";
import {Line} from "./Line";
import {Location} from "./Location";

export const Container = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

const Header = (props) => {
    return(
        <Container>
            <Heading color={props.color}>{props.company}</Heading>
            <RowLocation>
                <Line color={props.color}/>
                <Location color={props.color}> {props.city} • {props.country}</Location>
            </RowLocation>
        </Container>
    )
}
export default Header
