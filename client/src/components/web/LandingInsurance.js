import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: white;
 
  iframe {
    object-fit: fill;
    width: 100%;
    height: 100vh;
  }
`
const LandingInsurance = () => {
    return(
        <Main>
            <iframe frameBorder="0" title={'Insurance Landing Page Template'} src="https://insuur-landingpage.vercel.app"></iframe>
        </Main>
    )
}

export default LandingInsurance
