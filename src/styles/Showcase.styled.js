import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;
`

export const ShowcaseImageCard = styled.div`
    height: 30rem;
    width: 100%;
    padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile }){
        padding-top: 1rem;
        height: 30rem;
        display: block;
        border-radius: 50%;

    }
`

export const Particle = styled.img`
    position: absolute;
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    transform: rotate(${({ rotate }) => rotate});

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile }){
        display: none;
    }
`