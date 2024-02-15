import styled from "styled-components";
import Logo from "./Logo";

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;   
  left: 0;
  background: white;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`
const Loading = () => {
    return(
        <Container>
            <Logo/>
        </Container>
    )
}

export default Loading
