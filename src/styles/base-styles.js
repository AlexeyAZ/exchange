import { css, injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import { defaultFontSize } from './theme';

const baseStyles = () => injectGlobal`
  ${reset};
  * {
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  ${css`
    html {
      font-size: ${defaultFontSize}px;
      font-family: 'Formular', Arial, Helvetica, sans-serif;
      font-weight: 300;
      color: white;
    }

    a {
      transition: color 0.3s ease;
      color: white;
      display: inline-block;
      text-decoration: none;

      &:visited {
        color: rgba(255, 255, 255, 0.8);
      }

      &:hover,
      &:active {
        color: white;
      }
    }
  `};
`;

export default baseStyles;