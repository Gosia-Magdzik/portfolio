import React from 'react';
import { motion } from 'framer-motion';

import {
    PaddingContainer,
    Heading,
    BlueText,
} from '../styles/Global.styled';
import { ProjectDetails } from '../utils/Data';
import { Project } from './layouts/Project';

import { fadeInRightVariant, fadeInTopVariant } from '../utils/Variants';

export const MyProjects = () => {
  return (
    <PaddingContainer
        id='Projects'
        top="5%"
        bottom="5%"
        responsiveTop="20%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
    >
        <Heading 
          as={motion.h2} 
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
          size="h2"
        >
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

