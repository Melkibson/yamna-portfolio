import styled from "styled-components";
import {H2} from "../../../styles/CommonStyle";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items:  center;
  height: 90px;
`

const Heading = ({title}) => {
    return (
        <Container>
            <H2>{title}</H2>
        </Container>
    )
}
export default Heading
