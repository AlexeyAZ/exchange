import React, { Component } from 'react';
import styled from 'styled-components';
import baseStyles from '../base-styles.js';

const AppWrap = styled.div``;

class App extends Component {
  render() {
    baseStyles();
    return (
      <AppWrap>
        App
      </AppWrap>
    );
  }
}

export default App;