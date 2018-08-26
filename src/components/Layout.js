import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const LayoutWrap = styled.div`
  background-color: ${props => props.theme.colors.darkGray.dark};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;

const Layout = ({children}) =>
  <LayoutWrap>
    <Header />
    {children}
  </LayoutWrap>

export default Layout;