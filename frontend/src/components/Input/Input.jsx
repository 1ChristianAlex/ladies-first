import React from 'react';

import { Container, StyledInput } from './styles';

const Input = ({ type, value, defaultValue, onChange, placeholder, hasLine, borderRadius, name, required }) => (
  <Container hasLine={hasLine}>
    <StyledInput
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={e => onChange(e)}
      placeholder={placeholder}
      borderRadius={borderRadius}
      name={name}
      required={required}
    />
  </Container>
);

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  hasLine: false,
  borderRadius: 30,
  required: false,
  error: false
};

export default Input;
