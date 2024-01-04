import styled from 'styled-components'

import {
    Section,
    Grid,
} from "../../styles/CommonStyle";
import {colors} from "../../styles/CommonStyle";
import Content from "./footer/Content";

const SectionFooter = styled(Section)`
  position:relative;
  max-height: 40px;
  background-color: ${colors.darkGrey};
  justify-content: center;
  padding: 0;

`

const Footer = () => {
    return(
        <SectionFooter id={'footer'}>
            <Grid>
                <Content/>
            </Grid>
        </SectionFooter>

    )
}

export default Footer
