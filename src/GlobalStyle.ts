import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root {
        --background-gray: #333;
        --text-color-white: #FFF;

        --border-radius1: 7px;
        --border-radius2: 12px;

        --shadow-1: 0 0 50px rgba(0, 0, 0, 0.5);
        --shadow-2: 4 8 10px rgba(0, 0, 0, 0.5);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--text-color-white);
    }

    html, body {
        overflow-x: hidden;
        background: var(--background-gray);
    }  

    a {
        text-decoration: none;
    }
`