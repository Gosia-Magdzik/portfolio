import styled from "styled-components";
import Tooltip from "react-bootstrap/Tooltip";

export const Tool = styled.div`
    width: 40px;
    padding: 25px;
    font-size: 45px;
    margin-right: 15px;
    color: #156B87;

    &:hover {
      transition: 0.5s;
      color: ${({ theme }) => theme.color.toolHover};
      scale: 1.3;
  }
  @media (max-width: 767.98px) {
    font-size: 35px;
  }

  @media (max-width: 575.98px) {
    font-size: 30px;
  }
`;

export const StyledTooltip = styled(Tooltip)`
      inset: auto auto -35px !important;
`;