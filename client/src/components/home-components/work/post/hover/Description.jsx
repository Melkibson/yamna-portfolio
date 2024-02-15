import {Fragment} from "react";
import {Container, Title} from "../card/Description";
import {RowIcon} from "./RowIcon";
import {Svg, SvgContainer} from "./Svg";
import Links from "./Links";

const Description = (props) => {
    return(
        <Fragment>
            <Container color={props.color}>
                <Title color={props.color}>
                    {props.tech}
                </Title>
            </Container>
            <Container color={props.color}>
                <RowIcon>
                    <Title color={props.color} icon>{props.title}</Title>
                    <SvgContainer width={'22px'} height={'22px'}>
                        <Svg stroke={props.color}>
                            <use href="icons/arrow.svg#arrow"/>
                        </Svg>
                    </SvgContainer>
                </RowIcon>
                <Links props={props.links}/>
            </Container>
        </Fragment>
    )
}

export default Description
