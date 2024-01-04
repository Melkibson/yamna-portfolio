import styled from "styled-components";

export const Line = styled.div.attrs(props => ({
    background: props.color
}))`
  background: ${props => props.color};
  height: 7px;
  width: 50px;
`
