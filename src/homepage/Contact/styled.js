import styled from "styled-components";

export const StyledLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: max(3vw, 20px);
    word-wrap: break-word !important;

  &:hover {
    font-style: italic;
  };
`;

export const StyledContact = styled.ul`
    text-align: left;
    margin-left: 1em;
    word-wrap: break-word;
`;

export const StyledContactItem = styled.li`
    display: flex;
    list-style-type: none;
    min-width: 50vh;
    margin-bottom: 0.5em;
    word-wrap: break-word;
`;

export const ContactCircle = styled.div`
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    border-radius: 10em;
    background-color: #df5f5f;
    margin-bottom: 0em;
`;
   