import styled from "styled-components";

export const StyledTextArea = styled.div`
    display: block;
    word-wrap: break-word;
    //position: fixed;
    overflow-y: scroll;
    max-height: 100vh;
    min-height: 95%;
    overflow-x: hidden;
    padding: 20px;
    margin-right: 5px;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-top: 5px;
    white-space: pre-wrap;
    border-radius: 50px 0px 0px 50px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
    background-color: #F0F0DE;

    &:hover {
        box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 767px) {
    min-height: 90%;
    overflow-y: scroll;
  }
  `;

export const Image = styled.img`
    width: 2em;
    height: 2em;
`;

export const UList = styled.ul`
    li::before {
        color: #446C16;
        margin-right: 0.5px;
        display: inline-block;
        width: 0.7em;
        height: 0.7em;
        border-radius: 50%;
        border: 1px solid black;
        vertical-align: middle;
        margin-left: 5px;
  }
`;

export const G = styled.p`
        color: #446C16;
        content: "//";
        font-weight: bold;
`;

