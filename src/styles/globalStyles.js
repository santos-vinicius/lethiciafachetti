// globalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FFF5E9;
    font-family: Source Sans Pro, Playfair Display, sans-serif;
    color: #201402;
    overflow-x: hidden;
    
  }
  
  h1, h3 {
    font-family: Playfair Display, serif;
    font-weight: 800;
  }

  
  
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
