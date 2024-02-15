import styled from "styled-components";
import {RowBetween} from "../../../styles/CommonStyle";
import Copyright from "./Copyright";

const Container = styled(RowBetween)`
  width: 100%;
  justify-content: center;
  align-items: center;

`

const Content = () => {
    return(
        <Container>
            <Copyright/>
        </Container>
    )
}

export default Content
