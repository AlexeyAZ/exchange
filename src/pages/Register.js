import React from 'react';
import { withTheme  } from 'styled-components';

import ExchangePromoContent from '../components/ExchangePromoContent';
import LoginSidebar from '../components/LoginSidebar';
import ExchangePromo from '../components/ExchangePromo';

const Index = ({ theme }) =>
  <ExchangePromoContent>
    <LoginSidebar
      headTitle='Register'
      headLink={{
        href: '/',
        text: 'Log in'
      }}
      bodyInputs={[
        {
          label: 'Email',
          type: 'email'
        },
        {
          label: 'Password'
        },
        {
          label: 'Password confirm'
        },
        {
          label: 'Name'
        },
        {
          label: 'Surname'
        }
      ]}
      footerButton={{
        text: 'Register'
      }}
    />
    <ExchangePromo bgColor={theme.colors.darkGray.darken}/>
  </ExchangePromoContent>

export default withTheme (Index);
