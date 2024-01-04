import styled from "styled-components";
import {bp, H1} from "../../../styles/CommonStyle";
import {motion} from "framer-motion";
import {animate, initial} from "../../../styles/Animation";

const Heading = styled(H1)`
  position: relative;
  width: auto;
  overflow: hidden;
  margin-bottom: 60px;
  span {
     transition: all 0.3s ease-out;
     transform-origin: bottom left;
  }
    @media screen and (max-width: ${bp.mobile}px ){
      flex-direction: column;
      align-items: flex-start;
      
    }
`

const Title = ({name, lastName}) => {
    return(
        <Heading>
            <motion.span
                initial={initial.rotate}
                animate={animate.rotate}
            >
                {name}
            </motion.span>
            •
            <motion.span
                initial={initial.rotate}
                animate={animate.rotate}>
                {lastName}
            </motion.span>
        </Heading>
    )
}

export default Title
