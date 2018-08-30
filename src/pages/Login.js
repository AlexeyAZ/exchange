import React from 'react';

import ExchangePromoContent from '../components/ExchangePromoContent';
import LoginSidebar from '../components/LoginSidebar';
import ExchangePromo from '../components/ExchangePromo';

const Index = () =>
  <ExchangePromoContent>
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
  </ExchangePromoContent>

export default Index;
