import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;
`

export const ShowcaseImageCard = styled.div`
    width: max-content;
    padding-top: 2rem;
    border-radius: 3rem;
    position: relative;
    overflow: hidden;
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