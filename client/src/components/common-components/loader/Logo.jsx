import styled from "styled-components";

const Image = styled.img`
  animation: 0.75s infinite bounce;
  border-radius: 100%;
  max-width: 200px;

  @keyframes bounce{
    0%{transform: scale(0.8);}
    50%{transform: scale(1.1);}
    100%{transform: scale(0.8);}
  }
`

const Logo = () => {
    return(
        <Image src="logo/popartyam.jpg"/>
    )
}
export default Logo
