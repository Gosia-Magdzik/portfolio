import React from 'react'
import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
    Button,
} from '../styles/Global.styled';

export const Footer = () => {
  return (
    <PaddingContainer
        id='Contact'
        top='5%'
        bottom='10%'
    >
        <Heading
            as='h4'
            size='h4'
            align='center'
        >
            MY CONTACT
        </Heading>
        <Heading
            as='h2'
            size='h2'
            align='center'
            top='0.5rem'
        >
            Contact <BlueText>Me Here</BlueText>
        </Heading>
        <PaddingContainer top='3rem'>
            <FlexContainer justify="center">
                <ContactForm/>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
  )
}

