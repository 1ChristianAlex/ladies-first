import React from 'react';
import PropTypes from 'prop-types';
import * as Fa from 'react-icons/fa';
import { StyledButton, StyledIcon, Text } from './styles';

const Button = ({ text, href, to, bigger, active, icon }) => {
  const Icon = Fa[icon]
  console.log(StyledButton)

  return (
  <StyledButton
    href={href}
    to={to}
    bigger={bigger ? 1 : 0}
    active={active ? 1 : 0}
  >
    {icon && <StyledIcon as={Icon} size="28" />}
    <Text hasIcon={!!icon}>{text}</Text>
  </StyledButton>
)};

Button.defaultProps = {
  active: false,
  bigger: false,
  to: '/',
  icon: ''
};

Button.propTypes = {
  active: PropTypes.bool,
  bigger: PropTypes.bool,
  to: PropTypes.string,
  icon: PropTypes.string
}

export default Button;
