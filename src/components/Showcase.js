import React from 'react'
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';
import { FaGithub } from "react-icons/fa";

export const Showcase = () => {
  return (
    <PaddingContainer
        id="Home"
        left="3%"
        right="10%"
        top="15%"
        bottom="10%"
    >
        <FlexContainer align="left" fullWidthChild>
            {/* --left-content-- */}
            <div>
                <Heading as="h4" size="h4">Hello!</Heading>
                <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                    I'm <BlueText>Malgorzata Magdzik</BlueText> 
                </Heading>
                <Heading as="h3" size="h3">
                    I'm a <BlueText>Frontend Developer</BlueText>
                </Heading>
                <ParaText as="p" top="2rem" bottom="4rem">
                    Hello, I am a passionate coder, looking for a frontend developer role
                </ParaText>

                <FlexContainer>
                    <IconContainer color="blue" size="3rem">
                        <FaGithub/>
                    </IconContainer>
                </FlexContainer>
            </div>
        </FlexContainer>
    </PaddingContainer>
  )
}

