import React from 'react'
import styled from 'styled-components'
import {colors} from "../styles/CommonStyle";

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
`

const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: ${colors.error};
  border: 0.5px solid ${colors.error};
  padding: 0.75rem;


`

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorMessage>Failed to load component. Please refresh the page or try again later.</ErrorMessage>
        </ErrorContainer>
    )
}

export default Error;
