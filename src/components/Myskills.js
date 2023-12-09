import React from 'react'
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from '../styles/Global.styled';
import {
  SkillsCardContainer,
  SkillsCard,
} from "../styles/Myskills.styled"
import { Skills } from '../utils/Data';

export const Myskills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
    >
      <FlexContainer fullWidthChild align="center">
        <SkillsCardContainer>
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

        <div>
          <Heading as="h1" size="h1">
            Technologies & <BlueText>Tools I use</BlueText>
          </Heading>
        </div>
      </FlexContainer>
    </PaddingContainer>
  )
}

