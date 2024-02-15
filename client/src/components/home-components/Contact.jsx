import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';

import {
    Section,
    Grid,
    bp,
    colors,
} from "../../styles/CommonStyle";
import {useEffect} from "react";
import Social from "./contact/Social";
import Heading from "./contact/Heading";

const SectionContact = styled(Section)`
  height: auto;
  flex-direction: column;
  background: ${colors.darkGrey};
  @media screen and (max-width: ${bp.mobile}px){
    min-height: 500px;
    padding: 40px 0 ;
  }

`

const Contact = ({title}) => {
    const { ref, inView } = useInView({
        threshold: 0.85,
    });
    useEffect(() => {
        const mainDiv = document.getElementById('main')
        if(inView){
            mainDiv.style.transform = 'scale(0.95)'
        } else  mainDiv.style.transform = 'scale(1)'

    }, [inView])

    return(
        <SectionContact ref={ref} id={'contact'}>
            <Grid column>
                <Heading title={title}/>
                <Social/>
            </Grid>
        </SectionContact>
    )
}
export default Contact
