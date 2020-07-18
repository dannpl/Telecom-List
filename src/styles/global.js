import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
        background: #F3F8FB;
        -webkit-font-smoothing: antialiased;
    }

    #main-layout {
      margin-top: 70px;
      margin-left: 70px;
      transition: all 0.3s;
    }

    body, input, button {
        font: 14px sans-serif;
    }

    button {
      cursor: pointer;
    }

`;
