import React from 'react';
import styled from 'styled-components';

import { mediaUp, mediaDown } from '../styles/theme';

const SidebarWrap = styled.div`
  background-color: ${props => props.theme.colors.darkGray.main};
  display: flex;
  flex-shrink: 0;

  ${mediaDown.tablet`
    padding: 30px 0;
  `};

  ${mediaUp.tablet`
    height: 100%;
    width: 300px;
  `};

  ${mediaUp.desktop`
    width: 388px;
  `};
`;

const SidebarContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px 15px 20px;

  ${mediaDown.tablet`
    flex-basis: 400px;
    max-width: 400px;
  `};

  ${mediaUp.tablet`
    width: 388px;
  `};
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 7px;
`;

const SidebarBody = styled.div``;

const SidebarFooter = styled.div`
  margin-top: auto;
`;

const Sidebar = ({ containerProps, headerContent, bodyContent, footerContent, ...someProps }) =>
  <SidebarWrap {...someProps}>
    <SidebarContainer {...containerProps}>
      <SidebarHeader>
        { headerContent }
      </SidebarHeader>
      <SidebarBody>
        { bodyContent }
      </SidebarBody>
      <SidebarFooter>
        { footerContent }
      </SidebarFooter>
    </SidebarContainer>
  </SidebarWrap>

export default Sidebar;
