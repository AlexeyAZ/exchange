import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Padding } from 'styled-components-spacing';

import Sidebar from './Sidebar';
import Text from './Text';
import Link from './Link';
import Input from './input';
import { PrimaryButton } from './Button';

import { mediaUp } from '../styles/theme';

import generateKey from '../helpers/generateKey';

const LoginSidebarWrap = styled(Sidebar)`
  order: 2;

  ${mediaUp.tablet`
    order: 0;
  `};
`;

const LoginSidebarHeadRight = styled.div`
  color: ${props => props.theme.colors.gray.main};
`;
const LoginSidebarLink = styled(Link)``;
const LoginSidebarRouterLink = LoginSidebarLink.withComponent(RouterLink);

const LoginSidebar = ({ headTitle, headLink, bodyInputs, footerButton}) =>
  <LoginSidebarWrap
    containerProps={{
      tag: 'form'
    }}
    headerContent={
      <React.Fragment>
        <Text use='h3'>
          { headTitle }
        </Text>
        <LoginSidebarHeadRight>
          <Text use='body2' tag='span'>
            or
            {' '}
            <LoginSidebarRouterLink primary={'true'} to={ headLink.href }>
              { headLink.text }
            </LoginSidebarRouterLink>
          </Text>
        </LoginSidebarHeadRight>
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
      <Padding top={{phone: 4, tablet: 1 }}>
        <PrimaryButton tag={footerButton.tag ? footerButton.tag : 'button'}>
          { footerButton.text }
        </PrimaryButton>
      </Padding>
    }
  />

export default LoginSidebar;