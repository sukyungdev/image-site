import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import '../App.css';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {box-sizing: border-box;}

    body {
      font-family: 'NanumSquareNeo';
      overflow-x: hidden;
    }

    h1 {font-size: 2em;}

    a {
      text-decoration: none;
      color: inherit;
      opacity: 0.5;
    }

    a:hover {opacity: 0.8;}

    input,button {
      border : none;
      background: none;
    }

    input:focus {outline : none;}
    button {cursor: pointer;}

    @media (min-width: 568px) {
    }

    /* scroll */
    body::-webkit-scrollbar {width: 8px;}
    body::-webkit-scrollbar-thumb {background-color: #A8A8A8; border-radius: 3px;}
    body::-webkit-scrollbar-track {background-color: #e2e2e2;}
    `;

export default GlobalStyle;
