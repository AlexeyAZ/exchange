import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import Sidebar from './Sidebar';
import Text from './Text';
import Link from './Link';
import Input from './input';
import { PrimaryButton } from './Button';

import generateKey from '../helpers/generateKey';

const LoginSidebarLink = styled(Link)``;
const LoginSidebarRouterLink = LoginSidebarLink.withComponent(RouterLink);

const LoginSidebar = ({ headTitle, headLink, bodyInputs, footerButton}) =>
  <Sidebar
    containerProps={{
      tag: 'form'
    }}
    headerContent={
      <React.Fragment>
        <Text use='h3'>
          { headTitle }
        </Text>
        <div>
          <Text use='body2' tag='span'>
            or
            {' '}
            <LoginSidebarRouterLink to={ headLink.href }>
              { headLink.text }
            </LoginSidebarRouterLink>
          </Text>
        </div>
      </React.Fragment>
    }
    bodyContent={
      <React.Fragment>
        {
          bodyInputs.map(input =>
            <Input key={generateKey(input.label)} {...input}/>
          )
        }
      </React.Fragment>
    }
    footerContent={
      <PrimaryButton tag={footerButton.tag ? footerButton.tag : 'button'}>
        { footerButton.text }
      </PrimaryButton>
    }
  />

export default LoginSidebar;