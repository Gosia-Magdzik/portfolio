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
  SkillsCardContainer
} from "../styles/Myskills.styled"

export const Myskills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
    >
      <FlexContainer fullWidthChild>
        <SkillsCardContainer>

        </SkillsCardContainer>
        <div></div>
      </FlexContainer>

    </PaddingContainer>
  )
}

