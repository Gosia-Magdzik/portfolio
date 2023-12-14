import styled from "styled-components";

export const ContactForm = styled.form`
    width: 70%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
        margin: auto;
    }
`

export const Image = styled.img`
    width: 9rem;
    height: auto;
    transition: transform 0.4s ease-in-out;
    margin: 2rem;

    &:hover{
        transform: scale(1.1);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 4rem;
        height: auto;
        margin: 1rem;
    }

`

export const StyledImageLink = styled.a`
  text-decoration: none; 
  transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
    
    &:hover{
        transform: scale(1.3);
        filter: brightness(140%);
    }
`;