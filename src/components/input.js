import React, { PureComponent } from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

import { formatTypo, makeMedia } from '../styles/theme';

import eye from '../img/eye.svg';
import eyeInactive from '../img/eyeInactive.svg';

const InputWrap = styled.div`
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
`;

const StyledInput = styled.input`
  transition: background-color 0.3s ease;
  ${props => makeMedia(props.theme.fonts.input)};
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid ${props => props.theme.colors.gray.dark};
  color: white;
  padding: 26px 10px 4px 0;
  width: 100%;

  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

const InputPasswordIcon = styled(ReactSVG)`
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 10px;

  svg {

    path {
      transition: fill 0.3s ease;
      fill: ${props => props.theme.colors.gray.main};
    }

    &:hover {

      path {
        fill: white;
      }
    }
  }
`;

const InputLabel = styled.label`
  transition: transform 0.3s ease, top 0.3s ease, font-size 0.3s ease;
  transform: ${props => props.active ? 'translateY(0)' : 'translateY(-100%)'};
  color: ${props => props.theme.colors.gray.main};
  font-size: ${props => props.active ? formatTypo(12) : formatTypo(14)};
  position: absolute;
  top: ${props => props.active ? '8px' : 'calc(100% - 4px)'};
  left: 0;
  z-index: -1;
`;

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      empty: true,
      showPassword: false,
      value: ''
    };

    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onShowPassword = this.onShowPassword.bind(this);
  }

  onInputFocus() {
    if (this.state.empty) {
      this.setState({ focus: true });
    }
  }

  onInputBlur() {
    if (this.state.empty) {
      this.setState({ focus: false });
    } else {
      this.setState({ focus: true });
    }
  }

  onInputChange(e) {
    const value = e.target.value;
    const formatValue = value && value.trim() !== '';

    this.setState({ empty: !formatValue, value: value });
  }

  onShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    const { label, type } = this.props;
    const { showPassword } = this.state;

    const setType = showPassword => showPassword ? 'text' : 'password';


    return (
      <InputWrap>
        <StyledInput
          type={type ? (type === 'password' ? setType(showPassword) : type) : 'text'}
          value={this.state.value}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          onChange={this.onInputChange}
        />
        <InputLabel active={this.state.focus}>
          {label}
        </InputLabel>
        {
          type === 'password' && <InputPasswordIcon onClick={this.onShowPassword} src={showPassword ? eyeInactive : eye}/>
        }
      </InputWrap>
    )
  }
}

export default Input;