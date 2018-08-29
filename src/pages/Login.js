import React from 'react';

import Content from '../components/Content';
import LoginSidebar from '../components/LoginSidebar';
import ExchangePromo from '../components/ExchangePromo';

const Index = () =>
  <Content>
    <LoginSidebar
      headTitle='Log in'
      headLink={{
        href: '/register',
        text: 'Register'
      }}
      bodyInputs={[
        {
          label: 'Email',
          type: 'email'
        },
        {
          label: 'Password',
          type: 'password'
        }
      ]}
      footerButton={{
        text: 'Log in'
      }}
    />
    <ExchangePromo />
  </Content>

export default Index;
