import styled from 'styled-components';

const Link = styled.a.attrs({
  href: ''
})`
  color: ${props => props.theme.colors.gray.main};
  transition: color 0.3s ease;

  &:visited {
    color: ${props => props.theme.colors.gray.main};
  }

  &:hover {
    color: white;
  }
`;

export default Link;