import styled from "styled-components";
import {colorAttrs, svgAttrs} from "../../../../../utils/Attributes";

export const SvgContainer = styled.div.attrs(svgAttrs)`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-bottom: ${props => props.margin};
`

export const Svg = styled.svg.attrs(colorAttrs)`
  stroke: ${props => props.stroke};
  width: 100% ;
  height: 100%;
`
