import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const LayoutWrap = styled.div`
  background-color: ${props => props.theme.colors.darkGray.dark};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;

const LayoutContent = styled.div`
  flex-grow: 1;
  display: flex;
`;

const Layout = ({children}) =>
  <LayoutWrap>
    <Header />
    <LayoutContent>
      {children}
    </LayoutContent>
    <Footer />
  </LayoutWrap>

export default Layout;