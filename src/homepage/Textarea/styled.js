import styled from "styled-components";

export const StyledTextArea = styled.div`
    word-wrap: break-word;
    //position: fixed;
    overflow-y: scroll;
    height: 90vh;
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
    background-color: #FFF076;

    &:hover {
        box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 767px) {
    min-height: 90%;
    overflow-y: scroll;

  }
`;




