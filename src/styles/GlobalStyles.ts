import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
      box-sizing: border-box;
    }

    body {}

    h1 {
      font-size: 2em;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    input,button {
      border : none;
      background: none;
    }

    input:focus {
      outline : none;
    }
    
    button {
      cursor: pointer;
    }

    @media (min-width: 568px) {
    }
    `;

export default GlobalStyle;
