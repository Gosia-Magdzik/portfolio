import React from 'react'
import {
    PaddingContainer,
    Heading,
    BlueText,
} from '../styles/Global.styled';
import { ProjectDetails } from '../utils/Data';
import { Project } from './layouts/Project';

export const MyProjects = () => {
  return (
    <PaddingContainer
        id='Projects'
        top="5%"
        bottom="5%"
    >
        <Heading as="h1" size="h1">
            My <BlueText>Projects</BlueText>
        </Heading>

        {ProjectDetails.map((project) => (
          <PaddingContainer key={project.id} top="5rem" bottom="5rem">
            <Project data={project} />
          </PaddingContainer>

        ))}

    </PaddingContainer>
  )
}

