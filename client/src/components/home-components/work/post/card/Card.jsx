import Header from "./Header";
import Description from "./Description";
import {Fragment} from "react";

const Card = (props) => {
    return(
        <Fragment>
            <Header
                color={props.color}
                company={props.company}
                city={props.city}
                country={props.country}
            />
            <Description
                color={props.color}
                position={props.position}
                type={props.type}
                startYear={props.startYear}
                endYear={props.endYear}
                startMonth={props.startMonth}
                endMonth={props.endMonth}
            />
        </Fragment>

    )
}

export default Card
