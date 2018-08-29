import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import Content from '../components/Content';

const NoMatchWrap = styled(Content)`
  align-items: center;
  justify-content: center;
`;

const NoMatchContainer = styled.div`
  padding: 20px;
`;

const NoMatch = ({ location }) => (
  <NoMatchWrap>
    <NoMatchContainer>
      <Text use='h1' style={{color: 'white'}}>
        No match for <code>{location.pathname}</code>
      </Text>
    </NoMatchContainer>
  </NoMatchWrap>
);

export default NoMatch;