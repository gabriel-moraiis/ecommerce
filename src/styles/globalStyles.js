import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
  }

  body {
    font-family: 'PT Serif', serif;
    background-color: #E6E6E6;
  }
`;

export default GlobalStyle;
