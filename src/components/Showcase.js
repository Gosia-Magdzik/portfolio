import React from 'react'
import { motion } from 'framer-motion'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';
import { FaGithub } from "react-icons/fa";
import {
    ShowcaseParticleContainer,
    ShowcaseImageCard,
    Particle
} from '../styles/Showcase.styled';
import me from '../assets/mm.png';
import BackgroundImg from '../assets/particle.png';

import { fadeInLeftVariant,
        fadeInRightVariant,
} from '../utils/Variants';

export const Showcase = () => {
  return (
    <PaddingContainer
        id="Home"
        left="3%"
        right="10%"
        top="15%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="8rem"


    >
        <FlexContainer align="left" fullWidthChild>
            {/* --left-content-- */}
            <motion.div
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">Hello!</Heading>
                <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                    I'm <BlueText>Malgorzata Magdzik</BlueText> 
                </Heading>
                <Heading as="h3" size="h3">
                    I'm a <BlueText>Frontend Developer</BlueText>
                </Heading>
                <ParaText as="p" top="2rem" bottom="6rem">
                    That's me and my portfolio page.
                </ParaText>
            </motion.div>
            <FlexContainer 
                align='center' 
                justify='flex-end'
                as={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src={me} alt="mm"/>
                    </ShowcaseImageCard>
                    <Particle
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.5, 1]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        top="-80px"
                        left="20px"
                        rotate="60deg"
                    />
                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.8, 1]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        top="50px"
                        right="-70px"
                        rotate="0deg"
                    />
                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, -100, 0],
                            rotate: 360,
                            scale: [1, 0.9, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        bottom="30px"
                        left="-90px"
                        rotate="50deg"
                    />
                </ShowcaseParticleContainer>
            </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}

