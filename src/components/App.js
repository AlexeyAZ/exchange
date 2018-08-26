import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import baseStyles from '../styles/base-styles.js';

import Layout from './Layout';

import theme from '../styles/theme';

const AppWrap = styled.div``;

class App extends Component {
  render() {
    baseStyles();
    return (
      <ThemeProvider theme={theme.main}>
        <AppWrap>
          <Layout />
        </AppWrap>
      </ThemeProvider>
    );
  }
}

export default App;