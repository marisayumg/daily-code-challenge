import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        color: #FBFBFB;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        text-align: center;
    }

    img {
        max-width: 640px;
    }
`;
