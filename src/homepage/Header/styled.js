import styled from "styled-components";

export const RowStyled = styled.div`
    font-family: bigillabold;
    background-color: #B7B649;
    border: 1px solid;
    padding: 10px;
    border-radius: 50px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);

    &:hover {
        box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
    }
`
export const PortfolioStyled = styled.div`
    font-family: bigillabold;
    background-color: #B7B649;
    border: 1px solid;
    padding: 10px;
    border-radius: 50px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);

    &:hover {
        box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
    }
 `   

export const Image = styled.img`
    border-radius: 10%;
    margin-left: 10px;
    max-height: 300px;

      @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
`;

export const Name = styled.h1`
    font-size: 30px;
    font-weight: 700;
    padding: 12px 0 35px;
    margin: 0;
    white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 20px;
    padding: 8px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 22px;
  }
`;

export const SpecialFont = styled.h1`
    font-family: 'Great Vibes', cursive;
    font-size: 50px;
`;

export const Svg = styled.img`
    width: 2em;
    height: 2em;

    &:hover {
      background: white;
      border-radius: 5px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
`;