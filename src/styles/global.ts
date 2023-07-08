import { createGlobalStyle } from "styled-components";

export const GlobalStyleComponent = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, button, input {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Baloo 2', 'Roboto', sans-serif;
        line-height: 1.3;
    } 

    h1 {
        font-size: 3rem;
        font-weight: 800;
    }

    h2 {
        font-size: 2rem;
        font-weight: 800;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 800;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
    }

    h5 {
        font-size: 1.125rem;
        font-weight: 700;
    }
`