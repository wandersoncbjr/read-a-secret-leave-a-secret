// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&family=Permanent+Marker&display=swap');

  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  button, a {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
