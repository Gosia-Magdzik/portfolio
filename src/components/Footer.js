import React from 'react';
import { motion } from 'framer-motion';
import envelope from '../assets/envenlope.svg';
import phone from '../assets/phone.svg';

import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
} from '../styles/Global.styled';
import { 
    ContactForm,
    Image,
    StyledImageLink,
} from '../styles/Footer.styled';

import { fadeInBottomVariant } from '../utils/Variants';

export const Footer = () => {
  return (
    <PaddingContainer
        id='Contact'
        top='5%'
        bottom='10%'
    >
        <Heading
            as={motion.h4}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            size='h4'
            align='center'
        >
            MY CONTACT
        </Heading>
        <Heading
            as={motion.h2}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            size='h2'
            align='center'
            top='0.5rem'
        >
            Contact <BlueText>Me Here</BlueText>
        </Heading>
        <PaddingContainer top='3rem'>
            <FlexContainer 
                justify="center"
                direction="row"
                align="center"
            >
                <ContactForm
                    as={motion.form}
                    variants={fadeInBottomVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <StyledImageLink href="mailto:magdzik.frontend@gmail.com">
                        <Image src={envelope}></Image>
                    </StyledImageLink>
                    <StyledImageLink href="tel:+48794753888">
                        <Image src={phone} alt="phone"/>
                    </StyledImageLink>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
  )
}

