import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    };

    *, ::after, ::before {
        box-sizing: inherit;
    };

    body {
        overflow-y: scroll;
        //cursor: url(cursor.png) 4 12, default;
        background-color: #156B87;
        font-family: 'IBM Plex Mono', monospace;
        padding: 15px;
        letter-spacing: 0.03em;
        transition: background 0.3s;
    }; 
`;