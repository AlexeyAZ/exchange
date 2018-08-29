import React from 'react';
import styled from 'styled-components';

const SidebarWrap = styled.div`
  background-color: ${props => props.theme.colors.darkGray.main};
  display: flex;
  flex-shrink: 0;
  height: 100%;
  width: 388px;
`;

const SidebarContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 15px 20px;
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

const Sidebar = ({ containerProps, headerContent, bodyContent, footerContent }) =>
  <SidebarWrap>
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
