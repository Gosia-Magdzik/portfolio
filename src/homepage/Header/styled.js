import styled from "styled-components";

export const RowStyled = styled.div`
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

export const Portfolio = styled.img`
    margin: 5px;
    width: 50px;
    height: 50px;
    border-radius: 20px;
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

export const Button = styled.a`
  color: black;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.PattensBlue};
  display: inline-flex;
  align-items: center;
  gap: 15px;
  transition: box-shadow 0.5s;
  cursor: pointer;
  text-decoration: none;
  margin: 20px;
`;