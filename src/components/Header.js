import React from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

import Text from './Text';
import Button from './Button';

import headerLogo from '../img/headerLogo.svg';

const headerNavData = [
  {
    text: 'Trading',
    href: '',
    id: 'tradeid'
  },
  {
    text: 'Documentation',
    href: '',
    id: 'docsid'
  },
  {
    text: 'API',
    href: '',
    id: 'apiid'
  }
];

const HeaderWrap = styled.div`
  padding: 9px 16px 9px 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderNavList = styled.ul`
  display: flex;
`;
const HeaderNavItem = styled.li`
  margin-right: 45px;
`;
const HeaderNavLink = styled.a.attrs({
  href: ''
})`
  color: ${props => props.theme.colors.blue.main};

  &:hover {
    color: white;
  }

  &:visited {
    color: ${props => props.theme.colors.blue.main};

    &:hover {
      color: white;
    }
  }
`;

const HeaderNav = ({items}) =>
  <nav>
    <HeaderNavList>
      {
        items.map(item =>
          <HeaderNavItem key={item.id}>
            <HeaderNavLink href={item.href}>
              {item.text}
            </HeaderNavLink>
          </HeaderNavItem>
        )
      }
    </HeaderNavList>
  </nav>

const Logo = styled(ReactSVG).attrs({
  src: headerLogo
})`
  margin-right: 30px;
`;

const LoginButton = styled(Button)`
  margin-left: auto;
`;

const Header = () =>
  <HeaderWrap>
    <HeaderContainer>
      <a href='/'>
        <Logo/>
      </a>
      <HeaderNav items={headerNavData}/>
      <LoginButton href=''>
        Log in
      </LoginButton>
    </HeaderContainer>
  </HeaderWrap>

export default Header;