import React from 'react';

import { StyledButton } from './styles';

const Button = ({ text, href, to, bigger, active }) => (
  <StyledButton
    href={href}
    to={to}
    bigger={bigger ? 1 : 0}
    active={active ? 1 : 0}
  >
    {text}
  </StyledButton>
);

Button.defaultProps = {
  active: false,
  bigger: false,
  to: '/'
};

export default Button;
