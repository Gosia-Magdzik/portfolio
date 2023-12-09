import React from 'react'
import {
    PaddingContainer,
    Heading,
    BlueText,
} from '../styles/Global.styled';

export const MyProjects = () => {
  return (
    <PaddingContainer
        id="Projects"
        top="5%"
        bottom="5%"
    >
        <Heading as="h1" size="h1">
            My <BlueText>Projects</BlueText>
        </Heading>
    </PaddingContainer>
  )
}

