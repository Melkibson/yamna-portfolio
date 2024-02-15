
import {Container} from "../card/Header";
import {Svg, SvgContainer} from "./Svg";
import {Line} from "../card/Line";

const Header = ({color}) => {
    return(
        <Container>
            <SvgContainer
                width={'100px'}
                height={'35px'}
                margin={'20px'}
            >
                <Svg stroke={color}>
                    <use href="icons/tech.svg#tech"/>
                </Svg>
            </SvgContainer>
            <Line color={color}/>

        </Container>
    )
}
export default Header
