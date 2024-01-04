import styled from "styled-components";
import {FontParagraphLight, PgSmall} from "../../../../../styles/CommonStyle";
import {colorAttrs} from "../../../../../utils/Attributes";

export const Location = styled.span.attrs(colorAttrs)`
  ${FontParagraphLight};
  ${PgSmall};
  color: ${props => props.color};
  margin-left: 15px;
  line-height: 87%;
`
