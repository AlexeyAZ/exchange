import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import baseStyles from '../styles/base-styles.js';

import Layout from './Layout';
import Register from '../pages/Register.js';
import Login from '../pages/Login.js';
import NoMatch from'../pages/NoMatch';

import theme from '../styles/theme';

const AppWrap = styled.div``;

const App = () => {
  baseStyles();
  return (
    <ThemeProvider theme={theme.main}>
      <AppWrap>
        <Layout>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;