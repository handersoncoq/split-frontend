import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #f4f4f4;
  }

  h1, h2, h3, h4{
    padding: 0.5em;
    margin: 0;
  }

  p {
    line-height: 1.5;
  }

  .app-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: -3em;
    box-sizing: border-box;
  }

  .front-page-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-bottom: 1.5em;
  }

  .front-page-title{
    font-size: 3em;
    padding-bottom: 0;
  }

  .front-page-subtitle, sup{
    color: #1DA1F2;
  }

  sup{
    font-size: x-small;
  }
  
`;

export default GlobalStyle;