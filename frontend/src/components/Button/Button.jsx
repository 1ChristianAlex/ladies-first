import React from 'react';

import { StyledButton } from './styles';

const Button = ({ text, href, to, ...props }) => (
  <StyledButton href={href} to={to} {...props}>
    {text}
  </StyledButton>
);

export default Button;
