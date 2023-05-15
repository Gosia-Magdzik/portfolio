import styled from "styled-components";
import  Button  from "react-bootstrap/Button";
import { Card } from "react-bootstrap"

export const StyledButton = styled(Button).attrs(() => ({
    className: "w-100",
    target: "_blank",
    rel: "noopener noreferrer"
    
  }))`
    background: #E0DE7E;
    border: none;
    color: black;

    &:hover {
      background: #F0F0DE;
      color: black;

    }
    //&.btn-primary:active {
  `;

export const StyledCard = styled(Card)`
  max-width: 300px; 
  border-radius: 20px;
  background-color: #7ED2CA; 
  margin-bottom: 10px;
`;
