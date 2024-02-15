import styled from "styled-components";
import {bp, colors, FontParagraphMd, PgTiny} from "../../../styles/CommonStyle";

const Container = styled.div`
  ${PgTiny};
  display: flex;
  align-items: center;
    height: 40px;

`
const Copy = styled.div`
  ${FontParagraphMd};
  font-size: 14px;
  margin-right: 10px;
   @media screen and (max-width: ${bp.mobile}px){
      color: ${colors.white};
  }
`

const Copyright = () => {
    return(
        <Container>
            <Copy>&copy;</Copy>2023 - tous droits réservés - Yamna Melki.
        </Container>
    )
}
export default Copyright
