import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
  }

  ul {
    list-style: none;
  }

  :root {
    
  }
`; 