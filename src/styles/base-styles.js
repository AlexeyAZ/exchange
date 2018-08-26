import { css, injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import { defaultFontSize } from './theme';

const baseStyles = () => injectGlobal`
  ${reset};

  ${css`
    html {
      font-size: ${defaultFontSize}px
    }
    body {
      
    }

    .root {}

    a {
      transition: color 0.3s ease;
      color: white;
      text-decoration: none;

      &:visited {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  `};
`;

export default baseStyles;