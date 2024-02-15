import {Link} from "react-router-dom";
import styled from "styled-components";
import {
    colors,
    PgSmallBold,
    RowBetween
} from "../../../styles/CommonStyle";
const WorkItemLinkContainer = styled(RowBetween)`
    width: auto;
    a {
      transition: all 0.3s linear;
      ${PgSmallBold};
      &:hover{
        color: ${colors.main}
      }
    }
    svg {
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover{
        fill: ${colors.main}
      }
      
    }
`
const DemoLink = ({link}) => {
    const demoLink = []
        if(link !== ""){
            demoLink.push(
                <WorkItemLinkContainer key={link}>
                    <Link to={link} target={'_blank'}>Demo</Link>
                </WorkItemLinkContainer>
            )
        }
    return(
        demoLink
    )
}
export default DemoLink
