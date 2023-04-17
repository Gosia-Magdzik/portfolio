import styled from "styled-components";

export const StyledLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: larger;

  &:hover {
    font-style: italic;
  };
`;

export const StyledContact = styled.ul`
    min-width: 70px;
    text-align: left;
    margin-left: 1em;
`;

export const StyledContactItem = styled.li`
    display: flex;
    list-style-type: none;
    min-width: 50vh;
    margin-bottom: 0.5em;
`;

export const ContactCircle = styled.div`
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    border-radius: 10em;
    background-color: #df5f5f;
    margin-bottom: 0em;
`;
   