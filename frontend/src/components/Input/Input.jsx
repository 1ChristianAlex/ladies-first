import React from 'react';

import { Container, StyledInput } from './styles';

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  hasLine,
  borderRadius
}) => (
  <Container hasLine={hasLine}>
    <StyledInput
      type={type}
      value={value}
      onChange={e => onChange(e)}
      placeholder={placeholder}
      borderRadius={borderRadius}
    />
  </Container>
);

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  hasLine: false,
  borderRadius: 30
};

export default Input;
