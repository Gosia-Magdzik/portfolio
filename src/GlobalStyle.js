import { createGlobalStyle } from "styled-components";
//import * as theme from "./theme";


export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    };

    *, ::after, ::before {
        box-sizing: inherit;
    };

    body {
        background-color: #FBFBFE;
        font-family: 'IBM Plex Mono', monospace;
        padding: 15px;
        letter-spacing: 0.03em;
        overflow: hidden;
        transition: background 0.3s;
    }; 
`;