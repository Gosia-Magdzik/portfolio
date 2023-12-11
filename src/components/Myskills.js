import React from 'react';
import { motion } from 'framer-motion';

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  BlueText,
  IconContainer,
} from '../styles/Global.styled';
import {
  SkillsCardContainer,
  SkillsCard,
} from "../styles/Myskills.styled"
import { Skills } from '../utils/Data';

import { fadeInLeftVariant,
        fadeInRightVariant,
} from '../utils/Variants';

export const Myskills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer 
          fullWidthChild 
          align="center"
          responsiveFlex
          responsiveDirection="column-reverse"
      >
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {Skills.map((skill) => (
            <SkillsCard>
              <IconContainer size="5rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>

        <motion.div
           variants={fadeInRightVariant}
           initial="hidden"
           whileInView="visible"
        >
          <Heading as="h1" size="h1">
            Technologies & <BlueText>Tools I use</BlueText>
          </Heading>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  )
}

