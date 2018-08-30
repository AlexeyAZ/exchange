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

const formatBreakpoints = breakpoints =>
  Object.keys(breakpoints).reduce((result, key) => {
    result[key] = parseInt(breakpoints[key], 10);
    return result;
  }, {});

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
    breakpoints: formatBreakpoints(breakpoints),
    spacing: {
      1: '0',
      2: '0.25rem',
      3: '0.5rem',
      4: '1rem',
      5: '2rem',
      6: '4rem',
      7: '8rem'
    },
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
        dark: '#13141c',
        darken: '#0c0c15'
      }
    },
    fonts: {
      h1: {
        phone: {
          fontSize: formatTypo(24),
          lineHeight: formatTypo(28),
          fontWeight: 'bold'
        },
        tablet: {
          fontSize: formatTypo(34),
          lineHeight: formatTypo(38),
          fontWeight: 'bold'
        }
      },
      h3: {
        phone: {
          fontSize: formatTypo(defaultFontSize),
          lineHeight: formatTypo(26),
          fontWeight: 'bold'
        },
        tablet: {
          fontSize: formatTypo(20),
          lineHeight: formatTypo(30),
          fontWeight: 'bold'
        }
      },
      body1: {
        phone: {
          fontSize: formatTypo(defaultFontSize),
          lineHeight: formatTypo(22)
        },
        tablet: {
          fontSize: formatTypo(20),
          lineHeight: formatTypo(28)
        }
      },
      body2: {
        phone: {
          fontSize: formatTypo(14),
          lineHeight: formatTypo(22)
        }
      },
      body3: {
        phone: {
          fontSize: formatTypo(12)
        }
      },
      body: {
        phone: {
          fontSize: formatTypo(defaultFontSize),
          lineHeight: formatTypo(24)
        }
      },
      primaryButton: {
        phone: {
          fontSize: formatTypo(defaultFontSize),
          lineHeight: formatTypo(22),
          fontWeight: 'bold'
        }
      },
      buttonSmall: {
        fontSize: '14px',
        lineHeight: '16px'
      },
      input: {
        phone: {
          fontSize: formatTypo(14)
        }
      },
    }
  }
};

export default theme;
export {defaultFontSize, formatTypo, mediaUp, mediaDown, makeMedia};