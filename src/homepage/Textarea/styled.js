import styled from "styled-components";

export const StyledTextArea = styled.div`
    width: 250 px;
    overflow-y: scroll;
    padding: 20px;
    margin-right: 2px;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-top: 5px;
    white-space: pre-wrap;
    height: 90vh;
    //max-width: 500px;
    background-color: white;
    //float: right;
    border-radius: 50px 0px 0px 50px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.color.dolly};

    &:hover {
        box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
    }
`;




