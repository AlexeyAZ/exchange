import React from 'react';
import styled, {css} from 'styled-components';

import { formatTypo, makeMedia } from '../styles/theme';

const defaultButtonStyles = css`
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
`;

const Button = styled(({tag='a', children, ...props}) => React.createElement(tag, props, children))`
  ${defaultButtonStyles};
  transition: color 0.3s ease, border-color 0.3s ease;
  border: 1px solid ${props => props.theme.colors.gray.main};
  border-radius: 4px;
  color: rgba(255,255,255,0.7);
  font-size: ${formatTypo(14)};
  padding: 6px 13px;

  &:hover {
    border-color: white;
    color: white;
  }
`;

const PrimaryButtonWrap = styled(({tag='a', children, ...props}) => React.createElement(tag, props, children))`
  ${defaultButtonStyles};
  ${props => makeMedia(props.theme.fonts.primaryButton)};
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  background-image: linear-gradient(to bottom, #1b91ff, #2068ff);
  border-radius: 4px;
  border: 1px solid #568cff;
  box-shadow: 0 2px 0 0 #0053ff;
  display: block;
  color: white;
  padding: 7px 10px 6px;
  position: relative;
  will-change: transform;
  width: 100%;

  &:before {
    content: '';
    transition: opacity 0.5s ease;
    background-image: linear-gradient(to bottom, #2068ff, #1b91ff);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  &:hover {
    &:before {
      opacity: 0;
    }
  }

  &:focus,
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

const PrimaryButtonInner = styled.span`
  position: relative;
  z-index: 1;
`;

const PrimaryButton = ({children}) =>
  <PrimaryButtonWrap>
    <PrimaryButtonInner>
      {children}
    </PrimaryButtonInner>
  </PrimaryButtonWrap>

export default Button;
export { PrimaryButton };