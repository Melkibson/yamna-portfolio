import {Fragment} from "react";
import Header from "./Header";
import Description from "./Description";

const Card = (props) => {
    return(
        <Fragment>
            <Header
                color={props.color}
            />
            <Description
                color={props.color}
                tech={props.tech}
                links={props.links}
            />
        </Fragment>

    )
}

export default Card
