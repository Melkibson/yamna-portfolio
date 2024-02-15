import styled from 'styled-components'
import {
    colors,
    Grid,
    Section,
} from '../../styles/CommonStyle'

import Heading from "./header/Heading";

const SectionHeader = styled(Section)`
  position: relative;
  flex-wrap: wrap;
  height: 100vh;
  background: url("/img/bg.jpg");
  background-size: cover;
  padding: 0;
  @media screen and (orientation: portrait){
    max-height: 700px;
  }
`
const Overlay = styled.div`
  position: absolute;
    width: 100%;
    height: 100%;
    background: ${colors.darkGrey};
    opacity: 0.7;
`

const Header = () => {
    return(
            <SectionHeader id={'home'}>
                <Overlay/>
                <Grid>
                    <Heading/>
                </Grid>
            </SectionHeader>

    )
}

export default Header;
