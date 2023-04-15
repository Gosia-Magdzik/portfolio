import styled from "styled-components";
import Tooltip from "react-bootstrap/Tooltip";

export const Tool = styled.div`
    width: 40px;
    padding: 20px;
    font-size: 40px;
    margin: 5px;
    color: #156B87;
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      color: ${({ theme }) => theme.color.toolHover};
      scale: 1.3;
  };
`;

export const StyledTooltip = styled(Tooltip)`
      inset: auto auto -35px !important;
`;