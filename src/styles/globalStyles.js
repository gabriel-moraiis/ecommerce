import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', 'PT Serif', serif;
    background-color: #E6E6E6;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
