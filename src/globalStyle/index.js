import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        overflow-x: hidden;
        background-color: black;
        color: white;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
    }
    .root-container {
        width: 100vw;
        height: 100vh;
    }
`;

export default GlobalStyle;
