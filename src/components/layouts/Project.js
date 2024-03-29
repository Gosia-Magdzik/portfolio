import React from 'react';
import { motion } from "framer-motion";

import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../../styles/Global.styled';
import { 
    TechStackCard,
    ProjectImageContainer,
    ProjectImage,
} from '../../styles/MyProject.style';
import { FaGithub } from 'react-icons/fa';

import { fadeInLeftVariant, 
        fadeInRightVariant 
} from '../../utils/Variants';

export const Project = ({ data }) => {
  return (
    <FlexContainer 
        fullWidthChild
        direction={data.reverse ? 'row-reverse' : false}
    >
        <motion.div
            variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
            initial="hidden"   
            whileInView="visible"
        >
            <FlexContainer align="center" gap="1rem">
                <Heading  size='h3' bottom='1rem'>
                    {data.project_name}
                </Heading>
                <IconContainer color="blue" size="2rem">
                    <FaGithub/>
                </IconContainer>
            </FlexContainer>
            <PaddingContainer top='1rem'>
                <FlexContainer gap='1.5rem' align="center">
                    {data.tech_stack.map((stack) => (
                        <TechStackCard>{stack}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>
            <ParaText top='1.5rem' bottom='2rem'>
                {data.project_desc}
            </ParaText>
            <Button onClick={() => window.open(data.project_url, '_blank')}>Visit Website</Button>
        </motion.div>
        <ProjectImageContainer
            as={motion.div} 
            variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
            initial="hidden"   
            whileInView="visible"
            justify={data.reverse ? "flex-start" : "flex-end"}>
            <ProjectImage 
                src={data.project_img} 
                alt={data.project_name}
            />
        </ProjectImageContainer>
    </FlexContainer>
  )
}

