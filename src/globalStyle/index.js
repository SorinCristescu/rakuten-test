import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Manrope-Medium';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        overflow-x: hidden;
        background-color: black;
    color: white;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'MonumentExtended-Ultrabold';
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .root-container {
        width: 100vw;
        height: 100vh;
    }
`;

export default GlobalStyle;
