import styled from "styled-components";

export const RowStyled = styled.div`
    font-family: bigillabold;
    background-color: #FFF076;
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
    background-color: #FFF076;
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
    margin-left: 20px;
    margin-bottom: 20px;
    height: 250px;
    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        min-width: 125px;
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
