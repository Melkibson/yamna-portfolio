import styled from "styled-components";
import { H1 } from "../styles/CommonStyle";
const FullScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Maintenance = () => {
    return (
        <FullScreen>
            <H1>En construction</H1>
        </FullScreen>
    )
}
export default Maintenance;