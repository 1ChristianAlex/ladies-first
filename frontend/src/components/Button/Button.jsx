import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Fa from 'react-icons/fa';
import { StyledButton, StyledIcon, Text } from './styles';

const Button = ({ text, href, to, onClick, bigger, active, icon, padding, bigText }) => {
  const Icon = Fa[icon];

  const Component = () => {
    if (href) {
      return 'a';
    }
    if (to) {
      return Link;
    }
    if (onClick) {
      return 'button';
    }
  };

  return (
    <StyledButton
      as={Component()}
      to={to}
      onClick={onClick}
      bigger={bigger ? 1 : 0}
      active={active ? 1 : 0}
      padding={padding}
    >
      {icon && <StyledIcon as={Icon} size="28" />}
      <Text hasIcon={!!icon} bigText>
        {text}
      </Text>
    </StyledButton>
  );
};

Button.defaultProps = {
  active: false,
  bigger: false,
  to: null,
  onClick: () => {},
  icon: '',
  padding: '',
  bigText: false
};

Button.propTypes = {
  active: PropTypes.bool,
  bigger: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  padding: PropTypes.string,
  bigText: PropTypes.bool
};

export default Button;
