import styled from "styled-components";

export const StyledLink = styled.a`
    text-decoration: none;
    color: black;

  &:hover {
    font-style: italic;
  };
`;

export const StyledContact = styled.ul`
    padding: 5px;
    min-width: 70px;
    text-align: left;

`;

export const StyledContactItem = styled.li`
    list-style-type: none;
    min-width: 50vh;
`;