import styled from "styled-components";
import  Button  from "react-bootstrap/Button";
import { Card } from "react-bootstrap"

export const StyledButton = styled(Button).attrs(() => ({
    className: "w-100",
    target: "_blank",
    rel: "noopener noreferrer"
    
  }))`
    background: #115F58;
    border: none;
  
    //&:hover {
    //&.btn-primary:active {
  `;

export const StyledCard = styled(Card)`
  max-width: 300px; 
  border-radius: 20px;
  background-color: #CAF2EE; 
  margin-bottom: 10px;
`;
