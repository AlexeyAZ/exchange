import React from 'react';
import styled from 'styled-components';

import { makeMedia } from '../styles/theme';


const StyledText = styled(({tag, children, ...props}) => React.createElement(tag, props, children))`
  ${props => makeMedia(props.theme.fonts[props.use])};
`;

const Text = ({use='body', tag, children}) => {
  const tags = {
    h1: {
      tag: "h1"
    },
    h3: {
      tag: "h3"
    },
    body1: {
      tag: "p"
    },
    body: {
      tag: "p"
    }
  };

  return (
    <StyledText use={use} tag={tag ? tag : tags[use].tag}>
      {children}
    </StyledText>
  )
}
export default Text;