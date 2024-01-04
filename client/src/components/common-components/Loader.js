import styled from "styled-components";
import {colors} from "../../styles/CommonStyle";
import Loading from "./loader/Loading";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  bottom: 0;
  background: ${colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const Loader = () => {
    return(
        <Container>
            <Loading/>
        </Container>
    )
}

export default Loader
