import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
      box-sizing: border-box;
    }

    body {
      font-size: 1em;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    @media (min-width: 768px) {
      body {
        font-size: 2em;
      }
    }
    `;

export default GlobalStyle;
