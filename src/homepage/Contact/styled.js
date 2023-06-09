import styled from "styled-components";

export const StyledLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: max(1.5vw, 15px);
    word-wrap: break-word;
    margin-top: 20px;
`;

export const StyledContact = styled.ul`
    text-align: left;
    margin-left: 1em;
    margin-right: 1em;
    word-wrap: break-word;
    border: 1px solid;
    border-radius: 30px;
    background-color: rgba(241,241,222, 0.4);

    &:hover {
      background: rgba(255,255,255, 0.6);
      border-radius: 30px;
    }
`;

export const StyledContactItem = styled.li`
    display: flex;
    list-style-type: none;
    margin-bottom: 0.5em;
    word-wrap: break-word;
    padding-top: 10px;

    &:hover {
      font-style: italic;
      scale: 1.1;
      animation: shake 2s;

      @keyframes shake {
        10% {
          transform: rotate(2deg);
        }
        20% {
          transform: rotate(-2deg);
        }
        30% {
          transform: rotate(2deg);
        }
        40% {
          transform: rotate(-2deg);
        }
      }
  };
`;

export const Image = styled.img`
    width: 3.5em;
    height: 3.5em;
    align-items: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 1.5em;
        height: 1.5em;
        object-fit: cover;
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 2.5em;
        height: 2.5em;
        object-fit: cover;
      }
`;
   