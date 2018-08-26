import React from 'react';
import styled, {css} from 'styled-components';

const buttonStyles = css`
  transition: color 0.3s ease, border-color 0.3s ease;
  border: 1px solid ${props => props.theme.colors.gray.main};
  border-radius: 4px;
  color: rgba(255,255,255,0.7);
  padding: 6px 13px;

  &:hover {
    border-color: white;
    color: white;
  }
`;

const ButtonWrap = styled(({tag='a', children, ...props}) => React.createElement(tag, props, children))`
  ${buttonStyles};
`;

const Button = (props) =>
  <ButtonWrap {...props}>
    {props.children}
  </ButtonWrap>

export default Button;