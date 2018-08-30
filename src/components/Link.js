import styled from 'styled-components';

const Link = styled.a.attrs({
  href: ''
})`
  color: ${props => props.primary ? 'white' : props.theme.colors.gray.main};
  border-bottom: 1px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;

  &:visited {
    color: ${props => props.primary ? 'white' : props.theme.colors.gray.main};
  }

  &:hover {
    color: white;
    ${props => props.primary ? `border-color: white;` : ''};
  }
`;

export default Link;