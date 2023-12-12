import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;
`

export const ShowcaseImageCard = styled.div`
    height: 30%;
    width: auto;
    max-width: 100%;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 10%;
    margin-top: -40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile }){
        display: block;
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