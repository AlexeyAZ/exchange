import React from 'react';
import styled from 'styled-components';

import Link from './Link';

import { formatTypo } from '../styles/theme';

const FooterWrap = styled.div`
  text-align: right;
  font-size: ${formatTypo(12)};
  padding: 5px 19px 8px;
`;

const Footer = () =>
  <FooterWrap>
    <Link href=''>About exchange</Link>
  </FooterWrap>

export default Footer;