import { css } from 'styled-components';

const defaultFontSize = 16;
const formatTypo = (size) => `${size / defaultFontSize}rem`;

const breakpoints = {
  desktop_l: '1920px',
  desktop_m: '1440px',
  desktop: '1280px',
  tablet: '840px',
  phone_l: '600px',
  phone_s: '360px',
  phone: 0
}

const mediaUp = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc
}, {});

const mediaDown = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${parseInt(breakpoints[label], 10) - 1}px) {
      ${css(...args)}
    }
  `;
  return acc
}, {});

const makeMedia = (obj, prop) => {
  let style = [];
  for (let key in obj) {
    style.push(mediaUp[key]`
      ${prop ? `${prop}:` : ''}${obj[key]};
    `);
  }

  return style;
}

const theme = {
  main: {
    colors: {
      blue: {
        main: '#656999'
      },
      gray: {
        main: '#69728b',
        dark: '#2f3751',
        darken: '#615f6a',
        
      },
      darkGray: {
        main: '#181925',
        dark: '#13141c'
      }
    },
    fonts: {
      h1: {
        phone: {
          fontSize: formatTypo(34),
          lineHeight: formatTypo(38)
        }
      },
      h3: {
        phone: {
          fontSize: formatTypo(20),
          lineHeight: formatTypo(30)
        }
      },
      body1: {
        phone: {
          fontSize: formatTypo(20),
          lineHeight: formatTypo(28)
        }
      },
      body: {
        phone: {
          fontSize: formatTypo(defaultFontSize),
          lineHeight: formatTypo(24)
        }
      },
      button: {
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 'bold'
      },
      buttonSmall: {
        fontSize: '14px',
        lineHeight: '16px'
      },
      input: {
        fontSize: '14px'
      },
    }
  }
};

export default theme;
export {defaultFontSize, mediaUp, mediaDown, makeMedia};