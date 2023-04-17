import styled from "styled-components";

export const StyledTextArea = styled.div`
    position: sticky;
    //width: 250px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 20px;
    margin-right: 2px;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-top: 5px;
    white-space: pre-wrap;
    height: 90vh;
    border-radius: 50px 0px 0px 50px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
    background-color: #FDFFBB;

    &:hover {
        box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
    }
`;




