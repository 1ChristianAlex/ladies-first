import React from 'react';

import { Container, StyledInput } from './styles';

const Input = ({ type, value, onChange, placeholder }) => (
  <Container>
    <StyledInput
      type={type}
      value={value}
      onChange={e => onChange(e)}
      placeholder={placeholder}
    />
  </Container>
);

Input.defaultProps = {
  type: 'text',
  onChange: () => {}
};

export default Input;
